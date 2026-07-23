import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  business: z.string().trim().max(150).optional().default(""),
  link: z.string().trim().max(255).optional().default(""),
  service: z.string().min(1).max(100),
  budget: z.string().max(60).optional().default(""),
  timeline: z.string().max(60).optional().default(""),
  description: z.string().trim().min(10).max(2000),
  referral: z.string().max(150).optional().default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

const OWNER_EMAIL = "Pixelsbyraelyn@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string): string {
  const display = value && value.trim() ? escapeHtml(value.trim()) : '<span style="color:#9a9a9a;">Not provided</span>';
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #ece7dc;width:42%;color:#7E8062;font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #ece7dc;color:#3F4335;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.5;vertical-align:top;">${display}</td>
    </tr>`;
}

function buildOwnerEmail(data: InquiryInput): string {
  const paragraphs = data.description
    .split(/\n+/)
    .map((p) => `<p style="margin:0 0 12px;">${escapeHtml(p)}</p>`)
    .join("");

  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F3EA;font-family:'Helvetica Neue',Arial,sans-serif;color:#3F4335;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F3EA;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #ece7dc;">
        <tr><td style="padding:32px 40px 24px;border-bottom:1px solid #ece7dc;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#3F4335;letter-spacing:0.02em;">Pixels <em style="color:#B48A50;font-style:italic;">by Raelyn</em></div>
          <div style="margin-top:14px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7E8062;">New Project Inquiry</div>
          <div style="margin-top:6px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.25;color:#3F4335;">${escapeHtml(data.name)} &middot; <span style="color:#B48A50;font-style:italic;">${escapeHtml(data.service)}</span></div>
        </td></tr>

        <tr><td style="padding:28px 40px 8px;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7E8062;margin-bottom:8px;">Contact Information</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", data.name)}
            ${row("Business", data.business)}
            ${row("Email", data.email)}
          </table>
        </td></tr>

        <tr><td style="padding:24px 40px 8px;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7E8062;margin-bottom:8px;">Project Details</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Service Needed", data.service)}
            ${row("Website / Social Link", data.link)}
            ${row("Estimated Budget", data.budget)}
            ${row("Desired Timeline", data.timeline)}
          </table>
        </td></tr>

        <tr><td style="padding:24px 40px 8px;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7E8062;margin-bottom:10px;">About the Project</div>
          <div style="background:#F5F3EA;border-left:3px solid #B48A50;padding:18px 20px;color:#3F4335;font-size:15px;line-height:1.6;">
            ${paragraphs}
          </div>
        </td></tr>

        <tr><td style="padding:24px 40px 8px;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7E8062;margin-bottom:8px;">Additional Information</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("How they heard about you", data.referral)}
          </table>
        </td></tr>

        <tr><td style="padding:28px 40px 36px;" align="center">
          <a href="mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent("Re: Your project inquiry")}" style="display:inline-block;background:#B48A50;color:#ffffff;text-decoration:none;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;padding:14px 28px;">Reply to ${escapeHtml(data.name)}</a>
        </td></tr>

        <tr><td style="padding:20px 40px 32px;border-top:1px solid #ece7dc;text-align:center;font-size:12px;color:#7E8062;">
          Submitted through the Pixels by Raelyn project inquiry form
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildClientEmail(data: InquiryInput): string {
  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F3EA;font-family:'Helvetica Neue',Arial,sans-serif;color:#3F4335;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F3EA;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #ece7dc;">
        <tr><td style="padding:36px 40px 20px;border-bottom:1px solid #ece7dc;text-align:center;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#3F4335;letter-spacing:0.02em;">Pixels <em style="color:#B48A50;font-style:italic;">by Raelyn</em></div>
        </td></tr>

        <tr><td style="padding:36px 40px 8px;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7E8062;margin-bottom:10px;">Inquiry Received</div>
          <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:28px;line-height:1.25;color:#3F4335;">Thank you, ${escapeHtml(data.name)}.</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#3F4335;">Your project inquiry landed safely in my inbox, and I'm so glad you reached out. I read every message personally and will review the details you shared about <em style="color:#B48A50;">${escapeHtml(data.service)}</em> with care.</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#3F4335;">You can expect a thoughtful reply within <strong>1&ndash;2 business days</strong>. If your timeline shifts or you'd like to add anything, feel free to reply directly to this email.</p>
        </td></tr>

        <tr><td style="padding:8px 40px 24px;">
          <div style="background:#F5F3EA;border-left:3px solid #B48A50;padding:18px 22px;color:#3F4335;font-size:15px;line-height:1.6;">
            In the meantime, take a look around the <a href="https://pixels-by-raelyn-studio.lovable.app/work" style="color:#7E8062;text-decoration:underline;">recent work</a> or revisit the <a href="https://pixels-by-raelyn-studio.lovable.app/services" style="color:#7E8062;text-decoration:underline;">services</a> to get a feel for how we might collaborate.
          </div>
        </td></tr>

        <tr><td style="padding:8px 40px 36px;">
          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:17px;color:#7E8062;">Warmly,<br/>Raelyn</p>
        </td></tr>

        <tr><td style="padding:20px 40px 32px;border-top:1px solid #ece7dc;text-align:center;font-size:12px;color:#7E8062;">
          Pixels by Raelyn &middot; Pixelsbyraelyn@gmail.com
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

async function sendEmail(payload: Record<string, unknown>, label: string): Promise<void> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!lovableKey || !resendKey) return;

  const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": resendKey,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`[contact] ${label} email failed [${res.status}]: ${body}`);
  }
}

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error: dbError } = await supabaseAdmin.from("contact_inquiries").insert({
      name: data.name,
      email: data.email,
      business: data.business || null,
      link: data.link || null,
      service: data.service,
      budget: data.budget || null,
      timeline: data.timeline || null,
      description: data.description,
      referral: data.referral || null,
    });

    if (dbError) {
      console.error("[contact] insert failed", dbError);
      throw new Error("Failed to save inquiry");
    }

    if (!process.env.LOVABLE_API_KEY || !process.env.RESEND_API_KEY) {
      console.error("[contact] missing email credentials");
      return { ok: true };
    }

    await Promise.all([
      sendEmail(
        {
          from: "Pixels by Raelyn <onboarding@resend.dev>",
          to: [OWNER_EMAIL],
          reply_to: data.email,
          subject: `New Project Inquiry: ${data.name} | ${data.service}`,
          html: buildOwnerEmail(data),
        },
        "owner",
      ),
      sendEmail(
        {
          from: "Pixels by Raelyn <onboarding@resend.dev>",
          to: [data.email],
          reply_to: OWNER_EMAIL,
          subject: "Thank you for reaching out to Pixels by Raelyn",
          html: buildClientEmail(data),
        },
        "client",
      ),
    ]);

    return { ok: true };
  });
