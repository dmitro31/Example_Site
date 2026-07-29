export default function EmberGlow({
  className,
  color = "#D6431B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 300 300" className={className}>
      <defs>
        <radialGradient id={`glow-${color.replace("#", "")}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="60%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="150" fill={`url(#glow-${color.replace("#", "")})`} />
    </svg>
  );
}