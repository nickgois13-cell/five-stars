import { useEffect, useRef, useState } from "react";

const GOLD = "#f5c15d";
const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover], .hover-lift, .group';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 768;
    if (!isFine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      setHovering(!!t?.closest?.(INTERACTIVE_SELECTOR));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      target.current.x = -100;
      target.current.y = -100;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    const tick = () => {
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.35;
      glowPos.current.x += (target.current.x - glowPos.current.x) * 0.15;
      glowPos.current.y += (target.current.y - glowPos.current.y) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  const dotScale = pressed ? 0.6 : hovering ? 1.6 : 1;
  const glowScale = pressed ? 0.8 : hovering ? 2.2 : 1;
  const glowOpacity = hovering ? 0.55 : 0.3;

  return (
    <>
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
          transition: "opacity 280ms ease, width 280ms ease, height 280ms ease",
          transform: `translate3d(-100px,-100px,0)`,
          willChange: "transform, opacity",
          mixBlendMode: "screen",
          // scale via CSS var
          scale: String(glowScale),
        }}
      />
      <div
        ref={dotRef}
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
          scale: String(dotScale),
        }}
      />
    </>
  );
};

export default CustomCursor;
