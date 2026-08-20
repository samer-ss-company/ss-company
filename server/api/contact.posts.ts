import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const body = await readBody(event)

  const { name, email, phone, message } = body

  try {
    await resend.emails.send({
      from: 'Website <noreply@ss-company.com>',
      to: ['kharbandamohit83@gmail.com'],
      subject: `New Contact Form - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <table cellpadding="8" cellspacing="0" border="1">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `
    })

    return {
      success: true,
      message: 'Email sent successfully.'
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      message: 'Unable to send email.'
    }
  }
})