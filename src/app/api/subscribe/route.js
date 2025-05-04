import { neon } from '@neondatabase/serverless';

export async function POST(request) {
  try {
    const { email } = await request.json();
    const sql = neon(`${process.env.DATABASE_URL}`);

    // Check if the email is already subscribed:
    const existing = await sql`SELECT email FROM emails WHERE email = ${email}`;
    if(existing.length > 0) {
      return new Response(JSON.stringify({ error: "Email already subscribed" }), { status: 400 });
    }

    // Insert the email into the "emails" table:
    await sql`INSERT INTO emails (email) VALUES (${email})`;
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Error subscribing:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export function GET() {
  return new Response(null, { status: 405 });
}
