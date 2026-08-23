import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const message = String(body.message || '').trim()

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Please fill all required fields.',
        })
    }

    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: Number(config.smtpPort),
        secure: true,

        auth: {
            user: config.smtpUser,
            pass: config.smtpPassword,
        },
    })

    try {
        await transporter.sendMail({
            from: `"Double S Trading Website" <${config.smtpUser}>`,
            to: 'uideveloper.mohit@gmail.com',
            replyTo: email,
            subject: `New Website Enquiry - ${name}`,

            html: `
        <h2>New Website Contact Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `,
        })

        return {
            success: true,
            message: 'Message sent successfully.',
        }

    } catch (error) {
        console.error('Contact form email error:', error)

        throw createError({
            statusCode: 500,
            statusMessage: 'Unable to send your message. Please try again.',
        })
    }
})