export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="2.75" y1="22" x2="21.25" y2="22" />
      <path d="M5 22V3h14v19" />
      <path
        d="M5 3 L14 4 L14 20 L5 22 Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <circle cx="12" cy="13" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
