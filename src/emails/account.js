
const sgMail = require('@sendgrid/mail');


// const sendgridAPIKey = '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';
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({

        to: email,
        from: 'michael_collins@applied-science.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how the app works for you`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({

        to: email,
        from: 'michael_collins@applied-science.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. We hope to see you again.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}