
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

}
module.exports = JsReportController;
