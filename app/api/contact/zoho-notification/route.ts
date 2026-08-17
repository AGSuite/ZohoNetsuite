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

        const transporter = getTransporter();

        const mailOptions = {
            from: defaultSender,
            to: 'inbound@agsuitetech.com, hello@agsuitetech.com, contact@agsuitetech.com',
            subject: subjectTitle,
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
            await transporter.sendMail(mailOptions);
            console.log(`✅ Zoho notification email ("${subjectTitle}") sent to inbound@agsuitetech.com`);
        } else {
            console.log(`--- MOCK ZOHO NOTIFICATION EMAIL (${subjectTitle}) ---`, body);
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error: any) {
        console.error('❌ Error sending Zoho notification email:', error?.message || error);
        return NextResponse.json({ message: 'Error', details: error?.message }, { status: 500 });
    }
}
