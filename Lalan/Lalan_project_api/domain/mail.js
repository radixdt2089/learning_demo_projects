const nodemailer = require('nodemailer');

class Mail {
    static sendMail(to , subject,content ){
        let transporter = nodemailer.createTransport({
            host: "mail.mailtest.radixweb.net",
            port: 25,
            secure: false,
            // service : 'gmail',
            auth : {
                user : 'testdotnet@mailtest.radixweb.net',
                pass : 'deep70'
            },
            tls: {
                rejectUnauthorized: false,
              },
        });
        
        let mailoption = {
            from : 'testdotnet@mailtest.radixweb.net',
            to : to,
            subject : subject,
            text : content
        };
        transporter.sendMail(mailoption ,function(err , info){
            if(err ){
                console.log(err);
            }
            else{
                console.log('Email sent successfully!');
            }
        });
    }
}

module.exports = Mail;