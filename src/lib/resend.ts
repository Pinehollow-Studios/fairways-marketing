import "server-only";

/**
 * Resend Audiences integration.
 *
 * To wire this up:
 *   1. Sign up at https://resend.com, verify your sending domain.
 *   2. Create an Audience (Dashboard → Audiences → New).
 *   3. Create an API key with Audience write scope.
 *   4. Set RESEND_API_KEY + RESEND_AUDIENCE_ID in .env.local (dev)
 *      and in Vercel project env vars (prod).
 *
 * Until both env vars are set, addToAudience() is a no-op that logs and
 * returns success — so the waitlist form works end-to-end locally before
 * the Resend account exists.
 */

const RESEND_API = "https://api.resend.com";

export type WaitlistResult =
  | { ok: true; mode: "live" | "noop" }
  | { ok: false; error: string };

export async function addToAudience(email: string): Promise<WaitlistResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    // Local-dev / pre-Resend-account fallback: log the email and pretend it worked.
    // Switches to live mode the moment both env vars are populated.
    console.log("[waitlist:noop]", email);
    return { ok: true, mode: "noop" };
  }

  try {
    const res = await fetch(
      `${RESEND_API}/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    if (!res.ok) {
      // 409 = already on the list — treat as success (idempotent).
      if (res.status === 409) return { ok: true, mode: "live" };
      const body = await res.text().catch(() => "");
      console.error("[waitlist:error]", res.status, body);
      return { ok: false, error: "We couldn't save your email. Try again in a moment." };
    }

    return { ok: true, mode: "live" };
  } catch (err) {
    console.error("[waitlist:exception]", err);
    return { ok: false, error: "Something went wrong. Try again in a moment." };
  }
}
