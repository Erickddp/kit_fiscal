import { NextResponse } from 'next/server';

/**
 * API route for handling upsell (additional advisory) form submissions. The
 * environment variable `MAKE_UPSELL_WEBHOOK_URL` must be set to the Make
 * webhook URL. The request body is forwarded as JSON and a success
 * acknowledgement is returned to the client.
 */
export async function POST(request: Request) {
  const body = await request.json();

  // Honeypot check
  if (body.website) {
    return NextResponse.json({ message: 'OK' });
  }

  const url = process.env.MAKE_UPSELL_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json(
      { error: 'Webhook URL not configured' },
      { status: 500 }
    );
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Error en el servidor de destino (${res.status})`);
    }

    return NextResponse.json({ message: 'OK' });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Error forwarding request' },
      { status: 500 }
    );
  }
}