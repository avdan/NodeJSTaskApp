const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dan@danwritescode.com',
        subject: 'Thanks for joiing in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}


const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dan@danwritescode.com',
        subject: 'Thanks for being part of DanWritesCode.com',
        text: 'All good things come to an end. Sorry to see you go, we wanted you to know that we really appreciated you using our service and being our client. <br> We wish you all the best!'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}