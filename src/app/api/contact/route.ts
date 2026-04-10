import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, address, service, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const year = new Date().getFullYear();
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;
  const emailHref = `mailto:${email}`;

  const [customerResult, internalResult] = await Promise.all([
    // 1. Customer confirmation
    resend.emails.send({
      from: "GT Powerwash <info@gtpowerwash.com>",
      to: [email],
      subject: "Your GT Powerwash Quote Request",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);max-width:600px;width:100%;">

                <tr>
                  <td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8);padding:36px 40px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">GT Powerwash</h1>
                    <p style="margin:8px 0 0;color:#bfdbfe;font-size:14px;">Professional Residential Pressure Washing</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:40px;">
                    <h2 style="margin:0 0 8px;color:#1e3a8a;font-size:20px;">Thanks, ${name}!</h2>
                    <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.6;">
                      We received your quote request and will get back to you within <strong>1 business day</strong>.
                      Here&apos;s a summary of what you submitted:
                    </p>

                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f7ff;border:1px solid #bfdbfe;border-radius:8px;margin-bottom:28px;">
                      <tr><td style="padding:24px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          ${service ? `<tr>
                            <td style="padding:6px 0;color:#374151;font-size:14px;font-weight:700;width:130px;">Service</td>
                            <td style="padding:6px 0;color:#374151;font-size:14px;">${service}</td>
                          </tr>` : ""}
                          <tr>
                            <td style="padding:6px 0;color:#374151;font-size:14px;font-weight:700;width:130px;">Name</td>
                            <td style="padding:6px 0;color:#374151;font-size:14px;">${name}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0;color:#374151;font-size:14px;font-weight:700;">Phone</td>
                            <td style="padding:6px 0;color:#374151;font-size:14px;">${phone}</td>
                          </tr>
                          ${address ? `<tr>
                            <td style="padding:6px 0;color:#374151;font-size:14px;font-weight:700;">Address</td>
                            <td style="padding:6px 0;color:#374151;font-size:14px;">${address}</td>
                          </tr>` : ""}
                          ${message ? `<tr>
                            <td style="padding:6px 0 0;color:#374151;font-size:14px;font-weight:700;vertical-align:top;">Details</td>
                            <td style="padding:6px 0 0;color:#374151;font-size:14px;">${message}</td>
                          </tr>` : ""}
                        </table>
                      </td></tr>
                    </table>

                    <p style="margin:0 0 24px;color:#6b7280;font-size:14px;line-height:1.6;">
                      Questions in the meantime? Just reply to this email or give us a call.
                    </p>

                    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e7eb;padding-top:20px;">
                      <tr>
                        <td style="color:#9ca3af;font-size:13px;">
                          <strong style="color:#6b7280;">We accept:</strong> Zelle &middot; CashApp &middot; Venmo &middot; Cash &middot; Check
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #f3f4f6;">
                    <p style="margin:0;color:#9ca3af;font-size:12px;">&copy; ${year} GT Powerwash &middot; info@gtpowerwash.com</p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    }),

    // 2. Internal lead notification
    resend.emails.send({
      from: "GT Powerwash <info@gtpowerwash.com>",
      to: ["info@gtpowerwash.com"],
      replyTo: email,
      subject: `New Quote Request — ${name}${service ? ` (${service})` : ""}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);max-width:600px;width:100%;">

                <tr>
                  <td style="background:#1e3a8a;padding:24px 40px;">
                    <p style="margin:0;color:#93c5fd;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">New Lead</p>
                    <h1 style="margin:4px 0 0;color:#ffffff;font-size:22px;font-weight:800;">${name}</h1>
                    ${service ? `<p style="margin:6px 0 0;color:#bfdbfe;font-size:14px;">${service}</p>` : ""}
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px 40px;">

                    <!-- Contact details -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;width:100px;">Phone</td>
                        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                          <a href="${phoneHref}" style="color:#1d4ed8;font-size:15px;font-weight:700;text-decoration:none;">${phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Email</td>
                        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                          <a href="${emailHref}" style="color:#1d4ed8;font-size:14px;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                      ${address ? `<tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Address</td>
                        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${address}</td>
                      </tr>` : ""}
                      ${message ? `<tr>
                        <td style="padding:10px 0;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Notes</td>
                        <td style="padding:10px 0;color:#374151;font-size:14px;line-height:1.6;">${message}</td>
                      </tr>` : ""}
                    </table>

                    <!-- CTA buttons -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:8px;">
                          <a href="${phoneHref}" style="display:block;text-align:center;background:#1d4ed8;color:#ffffff;font-weight:700;font-size:15px;padding:14px 20px;border-radius:8px;text-decoration:none;">
                            Call ${name.split(" ")[0]}
                          </a>
                        </td>
                        <td style="padding-left:8px;">
                          <a href="${emailHref}" style="display:block;text-align:center;background:#f3f4f6;color:#1d4ed8;font-weight:700;font-size:15px;padding:14px 20px;border-radius:8px;text-decoration:none;border:1px solid #e5e7eb;">
                            Reply by Email
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <tr>
                  <td style="background:#f9fafb;padding:16px 40px;text-align:center;border-top:1px solid #f3f4f6;">
                    <p style="margin:0;color:#9ca3af;font-size:12px;">GT Powerwash &middot; Internal notification &middot; Do not forward</p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    }),
  ]);

  if (customerResult.error || internalResult.error) {
    console.error("Resend error:", customerResult.error ?? internalResult.error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
