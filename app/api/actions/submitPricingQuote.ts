'use server';

import { getTransporter, defaultSender } from '@/app/api/utils/mailer';

export async function submitPricingQuote(data: any) {
    try {
        console.log('--- ATTEMPTING TO SEND PRICING QUOTE EMAIL ---');
        const transporter = getTransporter();

        const {
            name,
            companyname,
            email,
            phone,
            countryCode,
            revenue,
            industries,
            countryEntities,
            modules,
        } = data;

        const mailOptions = {
            from: defaultSender,
            to: 'inbound@agsuitetech.com, hello@agsuitetech.com, contact@agsuitetech.com',
            subject: `New NetSuite Pricing/ROI Quote Request from ${companyname}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 700px; border: 1px solid #eee;">
                    <h2 style="color: #0033ad;">New NetSuite Calculator Request</h2>
                    <p>A user has completed the NetSuite Pricing Calculator on the website.</p>
                    
                    <hr style="border: 0; border-top: 2px solid #0033ad; margin: 20px 0;" />
                    
                    <h3 style="color: #581c87;">Contact Information</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td><td>${name}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${companyname}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Work Email:</td><td>${email}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${countryCode} ${phone}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Business Revenue:</td><td>${revenue}</td></tr>
                    </table>

                    <h3 style="color: #581c87;">Calculator Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; width: 180px; vertical-align: top;">Industries:</td>
                            <td style="padding: 8px 0;">${industries.join(', ')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Global Entities:</td>
                            <td style="padding: 8px 0;">
                                <ul style="margin: 0; padding-left: 20px;">
                                    ${Object.entries(countryEntities).map(([country, count]) => `<li>${country}: ${count} entities</li>`).join('')}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Modules Selected:</td>
                            <td style="padding: 8px 0;">${modules.join(', ')}</td>
                        </tr>
                    </table>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 11px; color: #999;">Automated notification from AGSuite NetSuite Calculator.</p>
                </div>
            `,
        };

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);

            // --- AUTO-REPLY TO USER ---
            const autoReplyOptions = {
                from: defaultSender,
                to: email,
                subject: `Your NetSuite Pricing Quote from AGSuite`,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                        <h2 style="color: #0033ad;">NetSuite Quote Request Received</h2>
                        <p>Dear ${name},</p>
                        <p>Thank you for using the <strong>AGSuite NetSuite Pricing Calculator</strong>.</p>
                        <p>We have received your configuration for <strong>${companyname}</strong>. Our business development executive will review your requirements and reach out shortly with a detailed quote and ROI analysis.</p>
                        <p>In the meantime, if you have any questions, please feel free to reply to this email.</p>
                        <br/>
                        <p>Best Regards,</p>
                        <p><strong>Team AGSuite</strong></p>
                        <p><a href="https://agsuitetech.com">www.agsuitetech.com</a></p>
                    </div>
                `
            };
            await transporter.sendMail(autoReplyOptions);

            console.log('✅ Calculator emails (Notification + Auto-reply) sent successfully!');
        } else {
            console.log('--- MOCK MODE (Pricing Quote) ---');
            console.log('Data:', data);
        }

        return { ok: true, error: null };
    } catch (error: any) {
        console.error('❌ Pricing quote email failed:', error.message);
        return { ok: false, error: error.message };
    }
}
