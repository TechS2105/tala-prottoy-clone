import dotenv from 'dotenv';
import mailController from '../mail/mail_controller.js';

dotenv.config();

/** Contact Page Form */
const postContactForm = (req, res) => {

    const { fullname, email, mobile, message } = req.body;
    
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

    res.redirect('/contact');

}

/** Skill Development Page Form */
const postSkillDevelopmentForm = (req, res) => {

    const { fullname, email, mobile, specialiation, message } = req.body;

    // Create Mail Template
    const mail = {

        from: `${fullname}`,
        to: process.env.Mail,
        subject: `${fullname} send a mail from skill-development form`,
        html: `
        
            <p>Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Mobile: ${mobile}</p>
            <p>Specialiation: ${specialiation}</p>
            <p>Message: ${message}</p>
        `

    }

    // Creat Send Mail Configuration
    mailController.sendMail(mail, (error) => {

        if (error) {
            
            res.status(400).json({ message: error });

        } else {
            
            res.json({

                status: 200,
                message: "Mail has been sent successfully"

            });

        }

    })

    res.redirect('/skill-development');


}

export default {

    postContactForm,
    postSkillDevelopmentForm

}