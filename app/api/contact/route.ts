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
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
    // Vercel serverless ortamında bağlantı zaman aşımı
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
