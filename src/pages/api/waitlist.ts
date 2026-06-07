import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body as { email?: string };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const supabase = getSupabaseAdmin();

  // Upsert so duplicate emails don't crash
  const { error } = await supabase
    .from("waitlist")
    .upsert({ email }, { onConflict: "email", ignoreDuplicates: true });

  if (error) {
    console.error("Supabase waitlist error:", error.message);
    return res.status(500).json({ error: "Could not save email" });
  }

  // Send admin notification email via Resend (optional — skipped if no key)
  const resendKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.WAITLIST_NOTIFY_EMAIL;

  if (resendKey && adminEmail) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AuraUI <onboarding@resend.dev>",
        to: [adminEmail],
        subject: "🎉 New Pro waitlist signup — AuraUI",
        html: `
          <div style="font-family:sans-serif;max-width:480px;padding:24px">
            <h2 style="margin:0 0 8px">New waitlist signup</h2>
            <p style="color:#555;margin:0 0 16px">Someone just joined the AuraUI Pro waitlist.</p>
            <div style="background:#f5f5f5;border-radius:8px;padding:16px;font-size:15px">
              <strong>${email}</strong>
            </div>
            <p style="color:#999;font-size:12px;margin-top:20px">auraui.com</p>
          </div>
        `,
      }),
    }).catch(() => {
      // Non-fatal — email failure should not fail the signup
    });
  }

  return res.status(200).json({ ok: true });
}
