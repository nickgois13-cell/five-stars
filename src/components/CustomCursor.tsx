import { useEffect, useRef, useState } from "react";

const GOLD = "#f5c15d";
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]';

const TRAIL_LENGTH = 24;

const CustomCursor = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);
  const target = useRef({ x: -100, y: -100 });
  const points = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );
  const rafRef = useRef<number>();
  const [enabled, setEnabled] = useState(false);
  const hoveringRef = useRef(false);
  const pressedRef = useRef(false);
  const [, force] = useState(0);

  useEffect(() => {
    const isFine =
      window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 768;
    if (!isFine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const next = !!t?.closest?.(INTERACTIVE_SELECTOR);
      if (next !== hoveringRef.current) {
        hoveringRef.current = next;
        force((v) => v + 1);
      }
    };
    const onDown = () => {
      pressedRef.current = true;
      force((v) => v + 1);
    };
    const onUp = () => {
      pressedRef.current = false;
      force((v) => v + 1);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const tick = () => {
      // Head follows target tightly
      const head = points.current[0];
      head.x += (target.current.x - head.x) * 0.35;
      head.y += (target.current.y - head.y) * 0.35;

      // Each subsequent point follows the previous one with progressive delay
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const prev = points.current[i - 1];
        const cur = points.current[i];
        const ease = 0.35 - (i / TRAIL_LENGTH) * 0.25; // 0.35 -> ~0.10
        cur.x += (prev.x - cur.x) * ease;
        cur.y += (prev.y - cur.y) * ease;
      }

      // Apply transforms
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const el = trailRefs.current[i];
        if (!el) continue;
        const p = points.current[i];
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }
      if (headRef.current) {
        headRef.current.style.transform = `translate3d(${head.x}px, ${head.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${head.x}px, ${head.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  const hovering = hoveringRef.current;
  const pressed = pressedRef.current;
  const headScale = pressed ? 0.55 : hovering ? 1.5 : 1;
  const glowScale = pressed ? 0.7 : hovering ? 2.1 : 1;
  const glowOpacity = hovering ? 0.55 : 0.32;

  return (
    <>
      {/* Trail - rendered behind head */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        const t = i / (TRAIL_LENGTH - 1); // 0 -> 1
        const size = 8 * (1 - t) + 2; // 8px -> 2px
        const opacity = (1 - t) * 0.55;
        const blur = 1 + t * 4;
        return (
          <div
            key={i}
            ref={(el) => (trailRefs.current[i] = el)}
            aria-hidden
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: size,
              height: size,
              borderRadius: "9999px",
              background: GOLD,
              opacity,
              filter: `blur(${blur}px)`,
              boxShadow: `0 0 ${6 + (1 - t) * 10}px ${GOLD}${Math.round(
                (1 - t) * 180
              )
                .toString(16)
                .padStart(2, "0")}`,
              pointerEvents: "none",
              zIndex: 99997,
              willChange: "transform",
              mixBlendMode: "screen",
            }}
          />
        );
      })}

      {/* Glow halo around head */}
      <div
        ref={glowRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 56,
          height: 56,
          borderRadius: "9999px",
          background: `radial-gradient(circle, ${GOLD}aa 0%, ${GOLD}33 40%, transparent 70%)`,
          filter: "blur(10px)",
          opacity: glowOpacity,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "opacity 280ms ease, scale 280ms ease",
          willChange: "transform, opacity",
          mixBlendMode: "screen",
          scale: String(glowScale),
        }}
      />

      {/* Head dot */}
      <div
        ref={headRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 10,
          height: 10,
          borderRadius: "9999px",
          background: `radial-gradient(circle, #fff 0%, ${GOLD} 60%, ${GOLD}00 100%)`,
          boxShadow: `0 0 12px ${GOLD}cc, 0 0 24px ${GOLD}77`,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "scale 200ms cubic-bezier(0.16,1,0.3,1)",
          willChange: "transform",
          scale: String(headScale),
        }}
      />
    </>
  );
};

export default CustomCursor;
