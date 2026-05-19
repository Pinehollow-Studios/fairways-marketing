"use client";

import { useActionState } from "react";
import { joinWaitlist, type JoinWaitlistState } from "@/app/actions";
import { accentFor, type Palette } from "./palette";

const initial: JoinWaitlistState = { status: "idle" };

type GlassEmailProps = {
  palette?: Palette;
  size?: "lg" | "md";
  placeholder?: string;
  cta?: string;
};

/**
 * Email pill — wired to the joinWaitlist Server Action via useActionState.
 * Visual port of marketing-motion.jsx :: GlassEmail; sent-state derived
 * from the action's return value rather than local useState.
 */
export function GlassEmail({
  palette = "mint",
  size = "lg",
  placeholder = "you@somewhere.co.uk",
  cta = "Join the list",
}: GlassEmailProps) {
  const acc = accentFor(palette);
  const [state, action, pending] = useActionState(joinWaitlist, initial);
  const sent = state.status === "ok";
  const error = state.status === "error" ? state.message : null;
  const tall = size === "lg" ? 64 : 54;

  return (
    <form
      action={action}
      className={`fw-email fw-email-${size}`}
      data-sent={sent ? "1" : "0"}
    >
      <div
        className="fw-email-glow"
        style={{
          background: `linear-gradient(120deg, ${acc.a} 0%, ${acc.b} 50%, ${acc.a} 100%)`,
        }}
      />
      <div className="fw-email-shell" style={{ height: tall }}>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={
            sent ? "You’re on the list — speak soon." : placeholder
          }
          disabled={sent || pending}
        />
        <button
          type="submit"
          disabled={sent || pending}
          style={{
            background: sent
              ? "transparent"
              : `linear-gradient(135deg, ${acc.a}, ${acc.b})`,
            color: sent ? acc.a : acc.on,
            border: sent ? `1px solid ${acc.a}55` : 0,
            boxShadow: sent
              ? "none"
              : `0 10px 30px -8px ${acc.a}80, inset 0 1px 0 rgba(255,255,255,0.4)`,
          }}
        >
          <span className="fw-email-cta-text">
            {sent ? "✓ On the list" : pending ? "Joining…" : cta}
          </span>
          {!sent && !pending && <span className="fw-email-shimmer" />}
        </button>
      </div>
      {error && (
        <p
          role="alert"
          style={{
            marginTop: 10,
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            color: "#E2664E",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}
