import { NextResponse } from 'next/server';
import { getTransporter, defaultSender } from '@/app/api/utils/mailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            'Last Name': name,
            Designation,
            Mobile,
            Email,
            Company,
            caseStudyTitle,
            recipientEmail,
            platform
        } = body;

        const transporter = getTransporter();

        const mailOptions = {
            from: defaultSender,
            to: `${recipientEmail}, nikhil.khode@agsuitetech.com`, // Send to respective ID and Nikhil
            cc: 'contact@agsuitetech.com', // CC the main sales email
            subject: `New Case Study Request: ${caseStudyTitle} (${platform})`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">
                    <h2 style="color: #001f5c;">New Case Study Access Request</h2>
                    <p>A user has requested access to a case study on the <strong>${platform}</strong> platform.</p>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold; width: 150px;">Case Study:</td>
                            <td style="padding: 10px 0;">${caseStudyTitle}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold;">User Name:</td>
                            <td style="padding: 10px 0;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold;">Designation:</td>
                            <td style="padding: 10px 0;">${Designation}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold;">Company:</td>
                            <td style="padding: 10px 0;">${Company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold;">Business Email:</td>
                            <td style="padding: 10px 0;">${Email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold;">Phone Number:</td>
                            <td style="padding: 10px 0;">${Mobile}</td>
                        </tr>
                    </table>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    
                    <p style="font-size: 12px; color: #777;">This email was sent from the AGSuite Website automated system.</p>
                </div>
            `,
        };

        // Log before sending
        console.log('--- ATTEMPTING TO SEND CASE STUDY EMAIL ---');
        console.log('To:', recipientEmail);
        console.log('Case Study:', caseStudyTitle);

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                await transporter.sendMail(mailOptions);

                // --- AUTO-REPLY TO USER ---
                const autoReplyOptions = {
                    from: defaultSender,
                    to: Email,
                    subject: `Thank you for your interest in AGSuite - ${caseStudyTitle}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                            <h2 style="color: #001f5c;">Thank You for Reaching Out!</h2>
                            <p>Dear ${name},</p>
                            <p>Thank you for requesting access to our case study: <strong>${caseStudyTitle}</strong>.</p>
                            <p>We have received your request and our executive will contact you shortly with all the details and your requested document.</p>
                            <p>If you have any urgent questions, feel free to reply to this email.</p>
                            <br/>
                            <p>Best Regards,</p>
                            <p><strong>Team AGSuite</strong></p>
                            <p><a href="https://agsuitetech.com">www.agsuitetech.com</a></p>
                        </div>
                    `
                };
                await transporter.sendMail(autoReplyOptions);

                console.log('✅ Emails (Notification + Auto-reply) sent successfully!');
            } catch (mailError: any) {
                console.error('❌ SMTP Error:', mailError.message);
                // Return descriptive error for debugging (Remove in production for security)
                return NextResponse.json({
                    message: 'SMTP Configuration Error',
                    details: mailError.message
                }, { status: 500 });
            }
        } else {
            console.log('--- MOCK EMAIL SENDING (Missing ENV variables) ---');
            console.log('Data:', body);
            console.log('---------------------------');
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
