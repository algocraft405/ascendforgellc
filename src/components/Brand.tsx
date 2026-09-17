export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3l8 4.5v4.2c0 4.7-3.3 8.8-8 10.3-4.7-1.5-8-5.6-8-10.3V7.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 14.2L12 8.2l3.8 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.6 14.2h4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function BrandWord({ accentClassName = "text-ember-700" }: { accentClassName?: string }) {
  return (
    <>
      ASCEND<span className={accentClassName}>FORGE</span>
    </>
  );
}
