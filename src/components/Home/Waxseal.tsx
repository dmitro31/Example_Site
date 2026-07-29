export default function WaxSeal({ label = "НА ВОГНІ • ВІД ШЕФА •" }: { label?: string }) {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="waxCircle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="95" fill="#6B1E2C" />
        <text fill="#F5EEE1" fontSize="12.5" letterSpacing="2" fontFamily="var(--font-plex-mono)">
          <textPath href="#waxCircle" startOffset="0%">
            {label}&#160;
          </textPath>
        </text>
      </svg>
      <span className="font-display text-2xl italic text-cream">Ж</span>
    </div>
  );
}