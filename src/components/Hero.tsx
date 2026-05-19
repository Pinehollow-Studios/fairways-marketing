import { siteConfig } from "@/lib/siteConfig";
import { WaitlistForm } from "./WaitlistForm";

/**
 * Hero — Atlas page-hero composition.
 *
 * Direct port of the iOS SignInView Welcome composition:
 *   • UPPERCASE eyebrow + brand glyph (in <Wordmark>, shown by SiteHeader)
 *   • Three-line serif stack: "Every course in / England / tracked."
 *   • "England" filled with the mint→lime gradient via background-clip
 *   • "tracked." in soft italic ink2
 *   • Editorial subhead beneath
 *   • Waitlist form or App Store CTA depending on siteConfig.appStoreUrl
 */
export function Hero() {
  const { eyebrow, line1, line2Gradient, line3Italic, subhead } = siteConfig.hero;

  return (
    <section className="relative mx-auto max-w-3xl px-6 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28">
      <p className="atlas-eyebrow mb-8">{eyebrow}</p>

      <h1
        className="font-display text-[44px] leading-[1.05] tracking-[-0.022em] text-ink sm:text-[64px] sm:tracking-[-0.025em]"
        style={{ fontWeight: 500 }}
      >
        {line1}
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
          }}
        >
          {line2Gradient}
        </span>
        <br />
        <span className="italic text-ink-2" style={{ fontWeight: 400 }}>
          {line3Italic}
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
        {subhead}
      </p>

      <div className="mt-10">
        {siteConfig.appStoreUrl ? (
          <AppStoreButton href={siteConfig.appStoreUrl} />
        ) : (
          <WaitlistForm />
        )}
      </div>
    </section>
  );
}

function AppStoreButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.02]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px color-mix(in srgb, var(--color-accent) 40%, transparent)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 12.04c-.02-2.36 1.93-3.5 2.02-3.55-1.1-1.6-2.81-1.82-3.42-1.85-1.46-.15-2.85.86-3.6.86-.75 0-1.89-.84-3.11-.82-1.6.02-3.07.93-3.89 2.36-1.66 2.87-.42 7.12 1.2 9.45.79 1.14 1.73 2.43 2.95 2.38 1.19-.05 1.64-.77 3.07-.77 1.43 0 1.84.77 3.1.74 1.28-.02 2.09-1.16 2.87-2.31.91-1.33 1.28-2.62 1.3-2.69-.03-.01-2.5-.96-2.52-3.8zM14.7 4.5c.66-.79 1.1-1.9.98-3-.95.04-2.1.63-2.78 1.42-.61.7-1.14 1.82-1 2.9 1.06.08 2.14-.54 2.8-1.32z" />
      </svg>
      Get it on the App Store
    </a>
  );
}
