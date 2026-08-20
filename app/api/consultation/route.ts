import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    await transporter.sendMail({
      from: '"AGSuite Technologies" <hello@agsuitetech.com>',
      to: 'sales@agsuitetech.com,nikhil.khode@agsuitetech.com,inbound@agsuitetech.com,dwoqqigo@parser.zohocrm.in',
      subject: emailSubject,
      html: internalMailContent,
    });

    // 5. Auto-Reply Email
    const autoReplyContent = `
      <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="background-color: #ffffff; font-family: Georgia, Times, serif;">
        <tr>
          <td align="center">
            <table width="600" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #dadada; padding: 20px;">
              <tr>
                <td align="center" style="padding: 14px 0;">
                  <a href="https://agsuitetech.com" target="_blank">
                    <img src="https://agsuitetech.com/email/img/thankyou.png" alt="Thank You" style="border: none; display: block; max-width: 100%;" />
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 15px 0;">
                  <p style="font-size: 16px; margin: 0; color: #000; font-family: verdana;">
                    We have received your request.<br />One of our team representatives will contact you shortly.<br />
                    Alternatively, reach us at <a href="mailto:hello@agsuitetech.com">hello@agsuitetech.com</a>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 15px 0; border-top: 1px solid #dadada;">
                  <p style="font-size: 16px; margin: 0; color: #000; font-family: verdana;">
                    <strong>For Immediate Assistance Contact:</strong><br />+91 9461046161
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 14px 0;">
                  <a href="https://agsuitetech.com" target="_blank">
                    <img src="https://agsuitetech.com/email/img/partners-logos.png" alt="Authorized Partner" style="border: none; display: block; max-width: 100%;" />
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    if (email) {
      await transporter.sendMail({
        from: '"AGSuite Technologies" <hello@agsuitetech.com>',
        to: email,
        subject: 'Auto Reply : Consultation Request Received',
        html: autoReplyContent,
      });
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
