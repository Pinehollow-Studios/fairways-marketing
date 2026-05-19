/**
 * Atlas backdrop — full-bleed deep-ocean radial + dual accent atmosphere.
 *
 * Mirrors iOS Fairways/DesignSystem/Components/AtlasBackdrop.swift +
 * AtlasV2/Atmosphere.swift:
 *   • paper canvas
 *   • radial sea ramp sea3 → sea2 → sea1
 *   • mint top radial (0,50% → 30% from top)
 *   • amber bottom-right radial
 *   • faint compass lines (cross + concentric)
 *
 * Decorative only — no hit testing, sits behind page content.
 */
export function AtlasBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Paper base */}
      <div className="absolute inset-0 bg-paper" />

      {/* Sea radial — sea3 → sea2 → sea1 from centre */}
      <div
        className="absolute inset-0 opacity-65"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, var(--color-sea-3) 0%, var(--color-sea-2) 50%, var(--color-sea-1) 100%)",
        }}
      />

      {/* Mint top atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, color-mix(in srgb, var(--color-accent) 11%, transparent) 0%, transparent 60%)",
        }}
      />

      {/* Amber bottom-right warmth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-amber) 9%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Compass lines — cross + two concentric circles, very faint */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
          <line x1="600" y1="0" x2="600" y2="1200" />
          <line x1="0" y1="600" x2="1200" y2="600" />
          <circle cx="600" cy="600" r="280" fill="none" />
          <circle cx="600" cy="600" r="500" fill="none" />
        </g>
      </svg>

      {/* Top fade so content sits on a slightly darker canvas */}
      <div
        className="absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-paper) 80%, transparent) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
