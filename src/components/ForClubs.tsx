import { siteConfig } from "@/lib/siteConfig";

/**
 * Quiet B2B section — plants the flag for the clubs revenue model
 * without dominating the friends-and-family launch page.
 */
export function ForClubs() {
  const { eyebrow, title, body, ctaLabel, ctaHref } = siteConfig.forClubs;

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
      <div
        className="rounded-3xl p-10 ring-1 sm:p-14"
        style={{
          background: "var(--color-glass-standard)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          // @ts-expect-error custom ring
          "--tw-ring-color": "var(--color-glass-border)",
          boxShadow: "0 24px 48px -16px rgba(0,0,0,0.6)",
        }}
      >
        <p className="atlas-eyebrow mb-4 text-amber">{eyebrow}</p>
        <h2
          className="mb-5 font-display text-3xl leading-tight tracking-[-0.014em] text-ink sm:text-[40px]"
          style={{ fontWeight: 500 }}
        >
          {title}
        </h2>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-2">{body}</p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink ring-1 transition-colors hover:bg-white/5"
          style={{
            // @ts-expect-error custom ring
            "--tw-ring-color": "var(--color-rule-strong)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
