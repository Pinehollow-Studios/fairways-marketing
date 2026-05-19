"use client";

import { accentFor, type Palette } from "./palette";

export type MotifKind = "atlas" | "tap" | "circle";

/**
 * Verbatim port of marketing-motion.jsx :: FeatureMotif.
 * Three SVG motifs, each with their own animation pattern.
 */
function FeatureMotif({ kind, palette }: { kind: MotifKind; palette: Palette }) {
  const acc = accentFor(palette);
  if (kind === "atlas") {
    return (
      <svg
        viewBox="0 0 200 140"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id={`mot-atlas-${palette}`} cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor={acc.a} stopOpacity="0.6" />
            <stop offset="100%" stopColor={acc.a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="200" height="140" fill={`url(#mot-atlas-${palette})`} />
        {Array.from({ length: 10 }, (_, r) =>
          Array.from({ length: 16 }, (_, c) => {
            const x = 10 + c * 12;
            const y = 14 + r * 12;
            const cx = 100;
            const cy = 70;
            const dist = Math.hypot(x - cx, y - cy);
            const op = Math.max(0.05, 1 - dist / 90);
            return (
              <circle
                key={`${r}-${c}`}
                cx={x}
                cy={y}
                r={1.2}
                fill={dist < 32 ? acc.a : "#9BB3C6"}
                opacity={op}
                style={{
                  animation: `fw-motif-pulse ${3 + ((r + c) % 3)}s ease-in-out ${((r * c) % 10) / 5}s infinite`,
                }}
              />
            );
          })
        )}
      </svg>
    );
  }
  if (kind === "tap") {
    return (
      <svg
        viewBox="0 0 200 140"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id={`mot-tap-${palette}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={acc.a} stopOpacity="0.5" />
            <stop offset="100%" stopColor={acc.a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="200" height="140" fill={`url(#mot-tap-${palette})`} />
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx="100"
            cy="70"
            r="10"
            fill="none"
            stroke={acc.a}
            strokeWidth="0.8"
            opacity="0.5"
            style={{
              animation: `fw-motif-ring 2.6s ease-out ${i * 0.85}s infinite`,
              transformOrigin: "100px 70px",
            }}
          />
        ))}
        <circle
          cx="100"
          cy="70"
          r="6"
          fill={acc.a}
          style={{
            filter: `drop-shadow(0 0 10px ${acc.a})`,
            animation: "fw-motif-bob 2.6s ease-in-out infinite",
          }}
        />
      </svg>
    );
  }
  // circle — three overlapping rings (friends)
  return (
    <svg
      viewBox="0 0 200 140"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id={`mot-circle-${palette}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={acc.b} stopOpacity="0.4" />
          <stop offset="100%" stopColor={acc.a} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="200" height="140" fill={`url(#mot-circle-${palette})`} />
      <g
        style={{
          animation: "fw-motif-spin 22s linear infinite",
          transformOrigin: "100px 70px",
        }}
      >
        <circle
          cx="78"
          cy="70"
          r="30"
          fill="none"
          stroke={acc.a}
          strokeWidth="0.8"
          opacity="0.75"
        />
        <circle
          cx="122"
          cy="70"
          r="30"
          fill="none"
          stroke={acc.b}
          strokeWidth="0.8"
          opacity="0.75"
        />
        <circle
          cx="100"
          cy="50"
          r="30"
          fill="none"
          stroke="#9BB3C6"
          strokeWidth="0.6"
          opacity="0.55"
        />
      </g>
      <circle
        cx="78"
        cy="70"
        r="2.4"
        fill={acc.a}
        style={{ filter: `drop-shadow(0 0 6px ${acc.a})` }}
      />
      <circle
        cx="122"
        cy="70"
        r="2.4"
        fill={acc.b}
        style={{ filter: `drop-shadow(0 0 6px ${acc.b})` }}
      />
      <circle cx="100" cy="50" r="2.0" fill="#F6F4EE" opacity="0.85" />
    </svg>
  );
}

export function FeatureCard({
  kind,
  eyebrow,
  title,
  body,
  palette,
}: {
  kind: MotifKind;
  eyebrow: string;
  title: string;
  body: string;
  palette: Palette;
}) {
  const acc = accentFor(palette);
  return (
    <article className="fw-feature">
      <div className="fw-feature-motif">
        <FeatureMotif kind={kind} palette={palette} />
      </div>
      <div className="fw-feature-body">
        <div className="fw-feature-eyebrow" style={{ color: acc.a }}>
          {eyebrow}
        </div>
        <h3 className="fw-feature-title">{title}</h3>
        <p className="fw-feature-copy">{body}</p>
      </div>
    </article>
  );
}
