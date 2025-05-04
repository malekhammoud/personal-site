// src/app/api/subscribe/route.js
import { NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function POST(request) {
  try {
    const { email } = await request.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const existing = await sql`SELECT email FROM emails WHERE email = ${email}`
    if (existing.length) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 })
    }

    await sql`INSERT INTO emails (email) VALUES (${email})`
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('subscribe route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}