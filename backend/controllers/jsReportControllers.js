
const JsReportService = require("../services/jsReporterService");
const fs = require("fs");

class JsReportController {
    jsReportService = new JsReportService();

    usersListReport = (req, res) => {

        this.jsReportService.createPdfFromUsers()
            .then(data => {
                
                res.contentType("application/x-google-chrome-pdf").status(200).end(data);
            })
            .catch(err => {
                res.status(500).send(

                    err + " Some error occurred while retrieving users report."
                );
            });
    };


    usersListReportForSpecificMail = (req, res) => {
        if(!req.body.email){
            res.status(400).json({message:"Content must to have an email"});
        }
        const email=req.body.email;
        this.jsReportService.sendPdfFromUsersToSpecificEmail(email)
            .then(data => {
                
                res.status(200).json({message: `Email is send to ${email}`})
            })
            .catch(err => {
                res.status(500).send(

                    err + " Some error occurred while sending users report."
                );
            });
    };

}
module.exports = JsReportController;
