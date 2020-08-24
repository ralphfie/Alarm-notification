const nodemailer = require('nodemailer');
const defaultMailingList = "goth7nest@gmail.com";
const senderEmail = "goth7nest@gmail.com";
const senderPassword = "Harapan9394"; // gmail app password
module.exports = {
    sendMail: async (subject, text, to = defaultMailingList) => {
        try {
        const transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port: 465, 
            auth: {
            user: senderEmail,
            pass: senderPassword,
            },
        });

        const message = {
            from: `CAMELIA Report <${senderEmail}>`,
            to,
            subject,
            text: subject,
            html: text,
        };

        transporter.sendMail(message, () => {});
        } catch (e) {
        // handle errors here
        }
    },
};