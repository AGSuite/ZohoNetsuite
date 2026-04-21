import nodemailer from 'nodemailer';

export const getTransporter = () => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log('❌ SMTP Connection Error:', error);
        } else {
            console.log('✅ SMTP Server is ready to take our messages');
        }
    });

    return transporter;
};

export const defaultSender = `"AGSuite Website" <${process.env.SMTP_USER || 'no-reply@agsuiteindia.com'}>`;
