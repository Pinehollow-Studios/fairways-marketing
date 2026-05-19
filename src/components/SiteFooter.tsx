import { siteConfig } from "@/lib/siteConfig";

export function SiteFooter() {
  const { copyrightLine, links } = siteConfig.footer;

  return (
    <footer
      className="mx-auto mt-16 w-full max-w-5xl border-t px-6 py-10 sm:px-8"
      style={{ borderColor: "var(--color-rule)" }}
    >
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="atlas-eyebrow text-ink-3">{copyrightLine}</p>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
