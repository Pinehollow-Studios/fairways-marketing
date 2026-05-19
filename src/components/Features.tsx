import { siteConfig } from "@/lib/siteConfig";

/**
 * Three feature cards on the Atlas thin-glass surface.
 * Mirrors iOS GlassSheet.thin density.
 */
export function Features() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="atlas-eyebrow mb-3">What it is</p>
      <h2
        className="mb-12 font-display text-3xl leading-tight tracking-[-0.018em] text-ink sm:text-4xl sm:tracking-[-0.02em]"
        style={{ fontWeight: 500 }}
      >
        Three things, done well.
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {siteConfig.features.map((f) => (
          <article
            key={f.eyebrow}
            className="flex flex-col rounded-2xl p-6 ring-1"
            style={{
              background: "var(--color-glass-thin)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              // @ts-expect-error custom ring
              "--tw-ring-color": "var(--color-glass-border)",
              boxShadow: "0 24px 48px -16px rgba(0,0,0,0.6)",
            }}
          >
            <p className="atlas-eyebrow mb-4 text-accent">{f.eyebrow}</p>
            <h3
              className="mb-3 font-display text-xl leading-snug tracking-[-0.012em] text-ink"
              style={{ fontWeight: 500 }}
            >
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-2">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
