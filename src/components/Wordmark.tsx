import { siteConfig } from "@/lib/siteConfig";

/**
 * Brand wordmark — compass-tile glyph + UPPERCASE caption.
 * Mirrors the iOS SignInView brand mark composition.
 */
export function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid h-7 w-7 place-items-center rounded-md"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
          boxShadow: "0 0 24px color-mix(in srgb, var(--color-accent) 35%, transparent)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="var(--color-on-accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <circle cx="7" cy="7" r="5" />
          <path d="M7 2v10M2 7h10" />
          <path d="M4.5 4.5 9.5 9.5M9.5 4.5 4.5 9.5" opacity=".6" />
        </svg>
      </div>
      <span className="atlas-eyebrow text-ink">{siteConfig.brandName}</span>
    </div>
  );
}
