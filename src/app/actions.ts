"use server";

import { addToAudience } from "@/lib/resend";

export type JoinWaitlistState =
  | { status: "idle" }
  | { status: "ok"; email: string }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prevState: JoinWaitlistState,
  formData: FormData
): Promise<JoinWaitlistState> {
  const raw = formData.get("email");
  const email = typeof raw === "string" ? raw.trim().toLowerCase() : "";

  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "That doesn't look like a valid email." };
  }

  const result = await addToAudience(email);
  if (!result.ok) return { status: "error", message: result.error };
  return { status: "ok", email };
}
