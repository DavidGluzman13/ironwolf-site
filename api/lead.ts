import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

function clean(v: unknown, max = 300) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return res.status(500).json({ ok: false, error: "Missing API key" });
    }

    const body = req.body || {};
    const name = clean(body.name, 80);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 120);
    const city = clean(body.city, 80);
    const service = clean(body.service, 120);
    const message = clean(body.message, 2000);

    if ((!phone && !email) || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Iron Wolf Doors and Windows <quotes@ironwolfdoorswindows.ca>",
      to: ["quotes@ironwolfdoorswindows.ca"], // change if needed
      replyTo: email || undefined,
      subject: `New Quote Request${city ? " - " + city : ""}`,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${name || "-"}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Email:</b> ${email || "-"}</p>
        <p><b>City:</b> ${city || "-"}</p>
        <p><b>Service:</b> ${service || "-"}</p>
        <p><b>Message:</b><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false });
  }
}
