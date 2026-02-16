import dotenv from 'dotenv';
import mailController from '../mail/mail_controller.js';

dotenv.config();

const postContactForm = (req, res) => {

    const { fullname, email, mobile, message } = req.body;
    
    const { pageName } = req.params;

    if (pageName === 'contact') {
        
        // Mail Template
        const mail = {

            from: `${email}`,
            to: process.env.Mail,
            subject: `${fullname} has been sent an email from contact form`,
            html: `
            
                <p>Name: ${fullname}</p>
                <p>Email: ${email}</p>
                <p>Mobile: ${mobile}</p>
                <p>Message: ${message}</p>

            `

        };

        // Mail Send Template
        mailController.sendMail(mail, (error) => {

            if (error) {
                
                res.status(400).json({ message: error });

            } else {
                
                res.json({

                    status: 200,
                    message: "Message has been sent successfully."

                })

            }

        })

    }

    res.redirect(`/${pageName}`);

}

export default {

    postContactForm

}