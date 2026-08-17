import { NextResponse } from 'next/server';
import { getTransporter, defaultSender } from '@/app/api/utils/mailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            countryCode,
            leadType, // 'Fastest ROI Report' or 'Implementation Checklist'
            platform = 'NetSuite'
        } = body;

        if (!name || !email || !phone || !leadType) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const transporter = getTransporter();

        const leadTitle = leadType === 'Fastest ROI Report' 
            ? 'Top 5 Regions Where NetSuite Delivers the Fastest ROI' 
            : 'The Essential Checklist Before You Implement NetSuite';

        // Email to the Sales/Admin team
        const mailOptions = {
            from: defaultSender,
            to: 'inbound@agsuitetech.com, hello@agsuitetech.com, contact@agsuitetech.com',
            subject: platform === 'NetSuite' ? 'ERP implementation Guide Enquiry Form' : `New Lead Magnet Download: ${leadTitle} (${platform})`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="https://agsuitetech.com/images/logos/agsuite_logo.webp" alt="AGSuite Logo" style="max-width: 150px;" />
                    </div>
                    <h2 style="color: #001f5c; border-bottom: 2px solid #001f5c; padding-bottom: 10px;">New Lead Generated (Lead Magnet)</h2>
                    <p>Dear Team,</p>
                    <p>A user has requested to download a lead magnet from the <strong>${platform}</strong> solutions page. Here are the details:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 160px;">Requested Asset:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${leadTitle}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">User Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Business Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${countryCode} ${phone}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                        <p style="margin: 0; font-weight: bold; color: #001f5c;">Source: ${leadType}</p>
                        <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Generated on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                    </div>

                    <p style="margin-top: 30px;">Regards,<br/>Systems<br/>AGSuite Technologies Pvt Ltd</p>
                </div>
            `,
        };

        console.log('--- ATTEMPTING TO SEND LEAD MAGNET EMAIL ---');
        console.log('Asset:', leadTitle);
        console.log('User:', name, `(${email})`);

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                // Send notification email to Team
                await transporter.sendMail(mailOptions);

                // Auto-reply to user thanking them
                const autoReplyOptions = {
                    from: defaultSender,
                    to: email,
                    subject: `Thank you for your interest in AGSuite - ${leadTitle}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                            <div style="text-align: center; margin-bottom: 20px;">
                                <img src="https://agsuitetech.com/images/logos/agsuite_logo.webp" alt="AGSuite Logo" style="max-width: 150px;" />
                            </div>
                            <h2 style="color: #001f5c;">Thank You for Your Request!</h2>
                            <p>Dear ${name},</p>
                            <p>Thank you for requesting access to our asset: <strong>${leadTitle}</strong>.</p>
                            <p>We have successfully received your request. Our team will contact you shortly with the requested document and details.</p>
                            <p>If you have any urgent questions, feel free to reply to this email.</p>
                            <br/>
                            <p>Best Regards,</p>
                            <p><strong>Team AGSuite</strong></p>
                            <p><a href="https://agsuitetech.com">www.agsuitetech.com</a></p>
                        </div>
                    `
                };
                await transporter.sendMail(autoReplyOptions);
                console.log('✅ Lead magnet emails sent successfully!');
            } catch (mailError: any) {
                console.error('❌ SMTP Error:', mailError.message);
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
        console.error('Lead magnet email sending error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
