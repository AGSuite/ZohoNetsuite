import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getDiwaliEmailTemplate } from '@/app/api/utils/diwaliEmailTemplate';

export async function POST(req: Request) {
  try {
    let data;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json({ status: 0, msg: 'Invalid JSON request payload' }, { status: 400 });
    }

    const {
      name,
      companyname,
      email,
      phone,
      countryCode,
      designation,
      revenue,
      leadsource,
      comments,
      BirthDate, // Honeypot
      recaptchaToken
    } = data || {};

    // 1. Honeypot Check (Spam Bot Protection)
    if (BirthDate) {
      return NextResponse.json({ status: 1, msg: 'Success!' });
    }

    // 2. Verify Google reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LeWKowtAAAAAIvBHTGESI2KdcQMdwjDzLR70U2t';
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { status: 0, msg: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // 3. Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'hello@agsuitetech.com',
        pass: process.env.SMTP_PASS || 'AGSuiteTech@123',
      },
    });

    const dateStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const emailSubject = data.subject || data.formTitle || 'NetSuite ERP Software Landing Page Enquiry';
    const emailHeading = data.formTitle || data.subject || 'NetSuite ERP Software Landing Page Enquiry';

    // 4. Internal Notification Email
    const internalMailContent = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; padding: 20px; color: #333;">
        <h3 style="color: #001f5c; border-bottom: 2px solid #001f5c; padding-bottom: 8px;">${emailHeading}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${companyname}</p>
        <p><strong>Business Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${countryCode} ${phone}</p>
        <p><strong>Role:</strong> ${designation}</p>
        <p><strong>Annual Revenue:</strong> ${revenue}</p>
        <p><strong>Lead Source:</strong> ${leadsource || 'N/A'}</p>
        <p><strong>How We Can Help:</strong> ${comments}</p>
        <p><strong>Date and Time:</strong> ${dateStr}</p>
      </div>
    `;

    // 4. Internal Notification Email (FIRST EMAIL to AGSuite Team)
    const teamRecipients = 'inbound@agsuitetech.com, hello@agsuitetech.com, contact@agsuitetech.com, nikhil.khode@agsuitetech.com, sales@agsuitetech.com, dwoqqigo@parser.zohocrm.in';

    await transporter.sendMail({
      from: '"AGSuite Technologies" <hello@agsuitetech.com>',
      replyTo: email || 'hello@agsuitetech.com',
      to: teamRecipients,
      subject: emailSubject,
      html: internalMailContent,
    });
    console.log(`✅ [1/2] Consultation lead email sent first to: ${teamRecipients}`);

    // 5. Auto-Reply Email (SECOND EMAIL to User)
    if (email) {
      await transporter.sendMail({
        from: '"AGSuite Technologies" <hello@agsuitetech.com>',
        replyTo: 'hello@agsuitetech.com',
        to: email,
        subject: 'Happy Diwali & Consultation Request Received - AGSuite Technologies',
        html: getDiwaliEmailTemplate({ recipientName: name, companyName: companyname }),
      });
      console.log(`✅ [2/2] Auto-reply email template sent to user: ${email}`);
    }

    return NextResponse.json({
      status: 1,
      msg: 'Success! The form was submitted successfully',
    });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { status: 0, msg: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
