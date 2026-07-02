import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Отправляем данные на сервер Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY, // Ключ подтянется из .env.local автоматически
        name: name,
        email: email,
        phone: phone,
        message: message,
        subject: `Ny forespørsel fra ${name} (SKOP BYGG AS)`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: result.message }, { status: 400 });
    }
  } catch (error) {
    console.error('Web3Forms Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}