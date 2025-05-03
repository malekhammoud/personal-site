import { NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function POST(request) {
  try {
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check for duplicate
    const existing = await sql`
      SELECT email FROM emails WHERE email = ${email}
    `
    
    if(existing.length > 0){
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 })
    }

    // Insert email as it does not exist already
    await sql`
      INSERT INTO emails (email)
      VALUES (${email})
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error subscribing:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
