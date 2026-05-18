import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            html: `
                <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #F8FAFC;'>
                    <h2 style='color: #1F3B57; border-bottom: 2px solid #3A6EA5; padding-bottom: 10px;'>New Contact Form Submission</h2>
                    <p style='font-size: 16px; color: #475569;'><strong>Name:</strong> ${name}</p>
                    <p style='font-size: 16px; color: #475569;'><strong>Email:</strong> <a href='mailto:${email}' style='color: #3A6EA5;'>${email}</a></p>
                    <div style='background-color: #ffffff; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #E2E8F0;'>
                        <p style='font-size: 16px; color: #1F3B57; margin: 0; white-space: pre-wrap;'><strong>Message:</strong><br><br>${message}</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}