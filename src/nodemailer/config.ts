import nodemailer from 'nodemailer'

// CONTACT_EMAIL / CONTACT_EMAIL_PASSWORD are server-only. The NEXT_PUBLIC_* names are
// read as a fallback for existing deployments but should be migrated, because the
// NEXT_PUBLIC_ prefix allows values to be bundled into client code.
export const mailUser = process.env.CONTACT_EMAIL ?? process.env.NEXT_PUBLIC_EMAIL
const mailPassword = process.env.CONTACT_EMAIL_PASSWORD ?? process.env.NEXT_PUBLIC_PASSWORD
export const mailCc = process.env.CONTACT_EMAIL_CC ?? process.env.NEXT_PUBLIC_CC

export const isMailConfigured = Boolean(mailUser && mailPassword)

export const transporter = nodemailer.createTransport({
	// service can be ‘hotmail’, ‘yahoo’, etc.
    service: 'gmail',
    auth: {
        user: mailUser,
        pass: mailPassword
    }
})
