const UsersService = require('./usersService');
const EmailService = require('./emailService');
const moment = require('moment');
const jsreport = require('@jsreport/jsreport-core')()
const fs = require("fs").promises;
jsreport.use(require('@jsreport/jsreport-chrome-pdf')())
jsreport.use(require('@jsreport/jsreport-jsrender')())

class jsReporterService {
    emailService = new EmailService();
    usersService = new UsersService();
    jsreportInstance;
    usersTemplateContent = `
    <body>
        <header>
        <h1>Ocio Open</h1>
        <img src="../assets/logo/open-canarias-logo.png"/>   
    </header> 
    
        <h3>Listado de Usuarios</h1>
    <table>
        <thead>
        <th>Imagen</th>
        <th>Email</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Puntuación</th>   
        <th>Creación</th>  
        <th>Conexión</th> 
        </thead> 
            {{for users}}
        <tr>
        <td><img class="user-image" src="{{:image_url}}"/></td>
        <td>{{:email}}</td>
        <td>{{:name}}</td>
        <td>{{:surname}}</td>
        <td>{{:punctuation_avg}}</td>   
        <td>{{:createdAt}}</td>  
        <td>{{:lastconnection}}</td> 
        </tr> 
        {{/for}} 
    </table>
    </body>
    
    
    </html>`;
    async createPdfFromUsers() {
        !this.jsreportInstance ? this.jsreportInstance = await jsreport.init() : null;
        const users = await this.usersService.findAll();
        const json = ({ "users": users });
        console.log(
            json
        );
        const result = await jsreport.render({
            template: {
                content: this.usersTemplateContent,
                engine: 'jsrender',
                recipe: 'chrome-pdf',
            },
            data: JSON.stringify(json)
        })

        await fs.writeFile(__dirname + "/../js-report/Users/report.pdf", result.content);
        let file = await fs.readFile(__dirname + "/../js-report/Users/report.pdf")

        return file;
    }

    async sendPdfFromUsersToSpecificEmail(email) {
        !this.jsreportInstance ? this.jsreportInstance = await jsreport.init() : null;
        const users = await this.usersService.findAll();
        const json = ({ "users": users });
        console.log(
            json
        );
        const result = await jsreport.render({
            template: {
                content: this.usersTemplateContent,
                engine: 'jsrender',
                recipe: 'chrome-pdf',
            },
            data: JSON.stringify(json)
        })

        await fs.writeFile(__dirname + "/../js-report/Users/report.pdf", result.content);
        

        return this.emailService.specificEmail(email, "Informe de Usuarios", `<h3>Informe de usuarios del ${moment().locale("es").format("DD [de] MMMM [del] YYYY")}</h3>`, __dirname +"./../js-report/Users/report.pdf");

    }

}

module.exports = jsReporterService;