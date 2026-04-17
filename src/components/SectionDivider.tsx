interface SectionDividerProps {
  /** CSS color value to fade FROM (top of divider). Use 'transparent' to fade in from below. */
  from?: string;
  /** CSS color value to fade TO (bottom of divider). Use 'transparent' to fade out into below. */
  to?: string;
  /** Height of the divider. Defaults to a tall, elegant fade. */
  height?: string;
  className?: string;
}

/**
 * Smooth gradient divider between sections. Avoids hard color cuts.
 * Renders an aria-hidden block with a vertical linear-gradient.
 */
const SectionDivider = ({
  from = "transparent",
  to = "transparent",
  height = "h-20 md:h-28",
  className = "",
}: SectionDividerProps) => {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${height} ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)`,
      }}
    />
  );
};

export default SectionDivider;
