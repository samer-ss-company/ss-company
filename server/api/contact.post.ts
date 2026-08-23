import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { name, email, phone, message } = body

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            message: 'Please fill all required fields.',
        })
    }

    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: Number(config.smtpPort),
        secure: Number(config.smtpPort) === 465,

        auth: {
            user: config.smtpUser,
            pass: config.smtpPassword,
        },
    })

    try {
        await transporter.sendMail({
            from: `"Double S Trading Website" <${config.smtpUser}>`,

            // Change this if you really intended gmaill.com
            to: 'uideveloper.mohit@gmail.com',

            replyTo: email,

            subject: `New Contact Enquiry from ${name}`,

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 30px;
                    background: #f7f7f7;
                ">
                    <div style="
                        background: #ffffff;
                        padding: 30px;
                        border-radius: 8px;
                    ">

                        <h2 style="
                            margin-top: 0;
                            color: #111827;
                        ">
                            New Website Contact Enquiry
                        </h2>

                        <p>
                            You have received a new enquiry from the
                            Double S Trading website.
                        </p>

                        <hr style="
                            border: none;
                            border-top: 1px solid #e5e7eb;
                            margin: 25px 0;
                        ">

                        <p>
                            <strong>Full Name:</strong><br>
                            ${name}
                        </p>

                        <p>
                            <strong>Email:</strong><br>
                            ${email}
                        </p>

                        <p>
                            <strong>Phone:</strong><br>
                            ${phone || 'Not provided'}
                        </p>

                        <p>
                            <strong>Message:</strong><br>
                            ${message}
                        </p>

                    </div>
                </div>
            `,
        })

        return {
            success: true,
            message: 'Message sent successfully.',
        }
    } catch (error) {
        console.error('Email Error:', error)

        throw createError({
            statusCode: 500,
            message: 'Unable to send email.',
        })
    }
})