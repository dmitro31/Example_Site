export default function CoffeeRing({
  className,
  color = "#3E2317",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <circle cx="100" cy="100" r="92" fill="none" stroke={color} strokeOpacity="0.18" strokeWidth="7" />
      <circle cx="100" cy="100" r="70" fill="none" stroke={color} strokeOpacity="0.28" strokeWidth="3" />
      <circle cx="108" cy="94" r="52" fill="none" stroke={color} strokeOpacity="0.14" strokeWidth="10" />
    </svg>
  );
}