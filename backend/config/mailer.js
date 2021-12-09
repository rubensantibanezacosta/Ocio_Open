const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config')[env];
const nodemailer = require("nodemailer");


transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.emailApiName, // generated ethereal user
            pass: config.emailPassword, // generated ethereal password
        },
    });

module.exports=transporter;

    transporter.verify().then(()=>{
        console.log("Ready for send emails");
    })

// create reusable transporter object using the default SMTP transport


