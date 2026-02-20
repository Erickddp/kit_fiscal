import { NextResponse } from 'next/server';

/**
 * API route that proxies support form submissions to a Make webhook. The
 * environment variable `MAKE_SUPPORT_WEBHOOK_URL` must be configured in
 * production. On success the endpoint returns a JSON object with
 * `{ message: 'OK' }`. On failure, it returns a 500 error with a message.
 */
export async function POST(request: Request) {
  const body = await request.json();

  // Honeypot check
  if (body.website) {
    return NextResponse.json({ message: 'OK' });
  }

  const url = process.env.MAKE_SUPPORT_WEBHOOK_URL;
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