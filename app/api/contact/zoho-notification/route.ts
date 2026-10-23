import { NextResponse } from 'next/server';
import { getTransporter, defaultSender } from '@/app/api/utils/mailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            mobile,
            role,
            company,
            services,
            revenue,
            hearAbout,
            message,
            subjectTitle = 'Zoho Contact us Form Enquiry'
        } = body;

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            return NextResponse.json({ message: 'Email service is not configured' }, { status: 503 });
        }

        const transporter = getTransporter();

        // 1. FIRST EMAIL: Internal notification to AGSuite Team (inbound, hello, contact, nikhil)
        const teamRecipients = 'inbound@agsuitetech.com, hello@agsuitetech.com, contact@agsuitetech.com, nikhil.khode@agsuitetech.com';

        const mailOptions = {
            from: defaultSender,
            replyTo: email || 'hello@agsuitetech.com',
            to: teamRecipients,
            subject: `${subjectTitle} - Lead: ${name || 'Website Visitor'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 650px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                    <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
                        <h2 style="color: #1e3a8a; margin: 0; font-size: 20px;">${subjectTitle}</h2>
                        <p style="color: #64748b; font-size: 13px; margin-top: 4px;">New lead submitted via website Zoho form.</p>
                    </div>
                    
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569; width: 180px;">Full Name:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${name || 'N/A'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Business Email:</td>
                            <td style="padding: 10px 0; color: #2563eb; font-weight: 500;">
                                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email || 'N/A'}</a>
                            </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Phone / Mobile:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${mobile || 'N/A'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Designation / Role:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${role || 'N/A'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Company Name:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${company || 'N/A'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Services Required:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${Array.isArray(services) ? services.join(', ') : (services || 'N/A')}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Annual Revenue:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${revenue || 'N/A'}</td>
                        </tr>
                        ${hearAbout ? `
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: 600; color: #475569;">How Heard About Us:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${hearAbout}</td>
                        </tr>` : ''}
                        ${message ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #475569; vertical-align: top;">How We Can Help:</td>
                            <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">${message}</td>
                        </tr>` : ''}
                    </table>
                    
                    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
                        This notification email was automatically dispatched from AGSuite Website.
                    </div>
                </div>
            `,
        };

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            // STEP 1: Send Team Notification Email FIRST
            await transporter.sendMail(mailOptions);
            console.log(`✅ [1/2] Team notification email sent to ${teamRecipients}`);

            // STEP 2: Send a confirmation to the person who submitted the form.
            if (email) {
                const autoReplyOptions = {
                    from: defaultSender,
                    replyTo: 'hello@agsuitetech.com',
                    to: email,
                    subject: 'Thank you for contacting AGSuite Technologies',
                    html: `
                        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 620px; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h2 style="color: #1e3a8a;">Thank you for reaching out${name ? `, ${name}` : ''}.</h2>
                            <p>We have received your enquiry${company ? ` for ${company}` : ''}. Our team will review it and contact you shortly.</p>
                            <p>If your request is urgent, reply to this email and our team will assist you.</p>
                            <p style="margin-top: 24px;">Regards,<br/><strong>Team AGSuite Technologies</strong></p>
                        </div>
                    `,
                };
                await transporter.sendMail(autoReplyOptions);
                console.log(`Confirmation email sent to user: ${email}`);
            }
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error: unknown) {
        const details = error instanceof Error ? error.message : 'Unknown email error';
        console.error('Error sending Zoho notification email:', details);
        return NextResponse.json({ message: 'Error', details }, { status: 500 });
    }
}
