import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Manglende påkrevde felt.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'h1y2g3o4@gmail.com', 
        // ВАЖНО: Это должен быть 16-значный "Пароль приложения", а не личный пароль!
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    // Формирование и отправка письма
    await transporter.sendMail({
      from: `"SKOP BYGG web" <h1y2g3o4@gmail.com>`, // Отправитель
      to: 'h1y2g3o4@gmail.com',                      // Получатель (ваша почта)
      subject: `Ny forespørsel fra ${name}`,
      text: `Navn/Firma: ${name}\nE-post: ${email}\nTelefon: ${phone || 'Ikke oppgitt'}\n\nMelding:\n${message}`,
      html: `
        <h3>Ny henvendelse fra nettsiden</h3>
        <p><strong>Navn/Firma:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Ikke oppgitt'}</p>
        <p><strong>Beskrivelse av oppdraget:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ error: 'Internt serverproblem.' }, { status: 500 });
  }
}