import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  if (!host || !user || !pass || !to || !from || Number.isNaN(port)) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
    to,
    from,
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as ContactPayload | null;

    if (!body) {
      return NextResponse.json(
        { error: "Ugyldig forespørsel." },
        { status: 400 }
      );
    }

    const name = clean(body.name);
    const email = clean(body.email).toLowerCase();
    const phone = clean(body.phone);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Navn, e-post og melding er pakrevd." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Skriv inn en gyldig e-postadresse." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Meldingen er for lang. Maks 5000 tegn." },
        { status: 400 }
      );
    }

    const smtp = getSmtpConfig();

    if (!smtp) {
      console.error(
        "SMTP is not configured. Required env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, MAIL_FROM."
      );
      return NextResponse.json(
        { error: "Kontaktskjemaet er ikke konfigurert på serveren." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: smtp.auth,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Ikke oppgitt");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: `${name} <${email}>`,
      subject: `Ny forespørsel fra ${name} - SKOP BYGG AS`,
      text: [
        "Ny forespørsel fra kontaktskjemaet",
        "",
        `Navn/firma: ${name}`,
        `E-post: ${email}`,
        `Telefon: ${phone || "Ikke oppgitt"}`,
        "",
        "Melding:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
          <h2>Ny forespørsel fra kontaktskjemaet</h2>
          <p><strong>Navn/firma:</strong> ${safeName}</p>
          <p><strong>E-post:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone}</p>
          <p><strong>Melding:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feil i /api/kontakt:", error);
    return NextResponse.json(
      { error: "Kunne ikke sende meldingen akkurat nå. Prøv igjen senere." },
      { status: 502 }
    );
  }
}
