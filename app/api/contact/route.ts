import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

function isSmtpConfigured() {
  return !!(
    CONTACT_EMAIL &&
    SMTP_HOST &&
    SMTP_PORT &&
    SMTP_USER &&
    SMTP_PASSWORD
  );
}

export async function POST(request: Request) {
  if (!isSmtpConfigured()) {
    return NextResponse.json(
      { error: "not_configured" },
      { status: 503 }
    );
  }

  let body: { name?: string; phone?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_body" },
      { status: 400 }
    );
  }

  const { name, phone, email, message } = body;
  if (!name?.trim() || !phone?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "missing_fields" },
      { status: 400 }
    );
  }

  const port = Number(SMTP_PORT);
  // Sertifika host adı ile eşleşmiyorsa (örn. mail.batech.com.tr'de başka domain sertifikası): SMTP_INSECURE_TLS=true ile TLS doğrulaması atlanabilir (sadece gerekirse kullanın)
  const tlsOptions =
    process.env.SMTP_INSECURE_TLS === "true" ? { rejectUnauthorized: false } : undefined;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
    ...(tlsOptions && { tls: tlsOptions }),
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });

  const mailOptions = {
    from: `"Batech İletişim" <${SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `İletişim formu: ${name}`,
    text: [
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `E-posta: ${email}`,
      ``,
      `Mesaj:`,
      message,
    ].join("\n"),
    html: [
      `<p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>`,
      `<p><strong>E-posta:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
      `<p><strong>Mesaj:</strong></p>`,
      `<pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>`,
    ].join(""),
  };

  try {
    await transporter.sendMail(mailOptions);

    // Formu dolduran kişiye "mesajınız alındı" onay e-postası
    const confirmSubject = "Mesajınız alındı – Batech Havuz Ekipmanları";
    const confirmText = [
      `Sayın ${name},`,
      ``,
      `İletişim formundan gönderdiğiniz mesaj tarafımıza ulaşmıştır.`,
      `En kısa sürede sizinle iletişime geçeceğiz.`,
      ``,
      `İyi günler dileriz.`,
      `Batech Havuz Ekipmanları`,
    ].join("\n");
    const confirmHtml = `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #333;">
        <p style="font-size: 16px;">Sayın <strong>${escapeHtml(name)}</strong>,</p>
        <p style="font-size: 16px; line-height: 1.6;">İletişim formundan gönderdiğiniz mesaj tarafımıza ulaşmıştır. En kısa sürede sizinle iletişime geçeceğiz.</p>
        <p style="font-size: 16px; margin-top: 24px;">İyi günler dileriz,<br><strong>Batech Havuz Ekipmanları</strong></p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="font-size: 12px; color: #888;">Bu e-posta otomatik gönderilmiştir. Lütfen yanıtlamayın.</p>
      </div>
    `;
    try {
      await transporter.sendMail({
        from: `"Batech Havuz Ekipmanları" <${SMTP_USER}>`,
        to: email,
        subject: confirmSubject,
        text: confirmText,
        html: confirmHtml,
      });
    } catch (confirmErr) {
      console.error("Contact form confirmation email error:", confirmErr);
      // Ana mail gitti, yanıt 200 dönmeye devam et
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Contact form SMTP error:", message, err);
    return NextResponse.json(
      { error: "send_failed", detail: process.env.NODE_ENV === "development" ? message : undefined },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
