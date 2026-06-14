import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, phone, email, service, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      // Fallback: log and return success (configure Resend API key in .env.local)
      console.log('Contact form submission (no Resend key configured):', body)
      return NextResponse.json({ success: true, message: 'Submission received (email not configured yet)' })
    }

    const emailBody = `
New Contact Form Submission — ForceX Tech Website

Name:     ${name}
Company:  ${company || 'Not provided'}
Phone:    ${phone}
Email:    ${email}
Service:  ${service || 'Not specified'}

Message:
${message || 'No message provided'}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
    `.trim()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'ForceX Tech Website <noreply@forcextech.us>',
        to: ['disoian@forcextech.us'],
        reply_to: email,
        subject: `New Quote Request from ${name}${company ? ` — ${company}` : ''}`,
        text: emailBody,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
