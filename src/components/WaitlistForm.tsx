"use client";

import { useActionState } from "react";
import { joinWaitlist, type JoinWaitlistState } from "@/app/actions";

const initial: JoinWaitlistState = { status: "idle" };

export function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initial);

  if (state.status === "ok") {
    return (
      <div
        className="inline-flex max-w-md items-start gap-3 rounded-md border px-4 py-3"
        style={{
          background: "var(--color-glass-thin)",
          borderColor: "var(--color-glass-border)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
          style={{ background: "var(--color-accent)" }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="var(--color-on-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 5l2 2 4-4" />
          </svg>
        </div>
        <p className="text-sm text-ink">
          You're on the list. We'll email{" "}
          <span className="font-medium text-ink">{state.email}</span> when we launch.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        disabled={pending}
        className="flex-1 rounded-full px-5 py-3 text-sm text-ink placeholder:text-ink-3 outline-none ring-1 ring-inset transition-colors focus:ring-2 disabled:opacity-60"
        style={{
          background: "rgba(255,255,255,0.06)",
          // @ts-expect-error custom property for focus colour
          "--tw-ring-color": "var(--color-glass-border)",
        }}
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px color-mix(in srgb, var(--color-accent) 40%, transparent)",
        }}
      >
        {pending ? "Joining…" : "Join the waitlist"}
      </button>

      {state.status === "error" && (
        <p className="basis-full text-sm text-claret">{state.message}</p>
      )}
    </form>
  );
}
