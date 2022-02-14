const express = require('express');
const jsReportApp = express();

function reporting(app, server){

    app.use("/reporting", jsReportApp)


    const report =  require("jsreport")({
        extensions: {
            express: {app: jsReportApp, server: server}
        },
        appPath: "/reporting"
    });
    
    report.init().then(() => {
        console.log("JSReport Server Started");
    }).catch(e => {
        console.error("JSReport Error: \n" + e);
    });

}

module.exports=
    reporting;
