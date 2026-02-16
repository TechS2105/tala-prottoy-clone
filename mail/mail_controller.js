import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mail_controller = nodeMailer.createTransport({

    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    logger: false,
    debug: true,
    secure: true,
    secureConnection: true,
    auth: {

        user: process.env.Mail,
        pass: process.env.Mail_Pass

    },
    tls: {

        rejectUnauthorized: true

    }

});

/** Verify Mail Server  */
mail_controller.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Ready To Send...");

    }

});

export default mail_controller;