import { NextResponse } from 'next/server';
import { getTransporter, defaultSender } from '@/app/api/utils/mailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            role,
            mobile,
            company,
            service,
            revenue,
            hearAboutUs,
            requirements,
            platform = 'NetSuite'
        } = body;

        const transporter = getTransporter();

        // Notification email to Sales Team
        const mailOptions = {
            from: defaultSender,
            to: 'shivam@agsuitetech.com, nikhil.khode@agsuitetech.com',
            cc: 'contact@agsuitetech.com',
            subject: `New Lead Generated - ${name} (${platform})`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="https://agsuitetech.com/images/logos/agsuite_logo.webp" alt="AGSuite Logo" style="max-width: 150px;" />
                    </div>
                    <h2 style="color: #001f5c; border-bottom: 2px solid #001f5c; padding-bottom: 10px;">New Website Lead</h2>
                    <p>Dear All,</p>
                    <p>This is to inform you that a new lead has been generated from the <strong>${platform}</strong> footer form. Below are the details:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 160px;">Lead Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${mobile}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Role:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${role || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Interest:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Annual Revenue:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${revenue}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Source:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${hearAboutUs || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Requirements:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${requirements}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                        <p style="margin: 0; font-weight: bold; color: #001f5c;">Lead Status: Database</p>
                        <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Generated on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                    </div>

                    <p style="margin-top: 30px;">Regards,<br/>Systems<br/>AGSuite Technologies Pvt Ltd</p>
                </div>
            `,
        };

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
            
            // Auto-reply to Lead
            const autoReplyOptions = {
                from: defaultSender,
                to: email,
                subject: `Received New Lead - ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img src="https://agsuitetech.com/images/logos/agsuite_logo.webp" alt="AGSuite Logo" style="max-width: 150px;" />
                        </div>
                        <h2 style="color: #001f5c;">Thank You for Reaching Out!</h2>
                        <p>Dear ${name},</p>
                        <p>Thank you for your interest in AGSuite's <strong>${platform}</strong> solutions.</p>
                        <p>We have received your enquiry for <strong>${company}</strong>. Our team is reviewing your requirements and one of our experts will contact you within 24 hours to discuss how we can help your business.</p>
                        <p>If you have any urgent questions, feel free to reply to this email.</p>
                        <br/>
                        <p>Best Regards,</p>
                        <p><strong>Team AGSuite</strong></p>
                        <p><a href="https://agsuitetech.com">www.agsuitetech.com</a></p>
                    </div>
                `
            };
            await transporter.sendMail(autoReplyOptions);
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Lead email error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
