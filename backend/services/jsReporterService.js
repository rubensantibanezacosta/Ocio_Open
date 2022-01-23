const UsersService = require('./usersService');
const jsreport = require('@jsreport/jsreport-core')()
const fs = require("fs").promises;
jsreport.use(require('@jsreport/jsreport-chrome-pdf')())
jsreport.use(require('@jsreport/jsreport-jsrender')())

class jsReporterService {
    usersService = new UsersService();
    jsreportInstance;

    async createPdfFromUsers() {
        !this.jsreportInstance ? this.jsreportInstance = await jsreport.init() : null;
        const users = await this.usersService.findAll();
        const json = ({"users":users});
        console.log(
            json
        );
        const result = await jsreport.render({
            template: {
                content: `
<body>
    <header>
    <h1>Ocio Open</h1>
    <img src="\\..\\..\\assets\\logo\\open-canarias-logo.png"/>   
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


</html>`,   
                engine: 'jsrender',
                recipe: 'chrome-pdf',
            },
            data: JSON.stringify(json)
        })

             await fs.writeFile('report.pdf', result.content);
             let file =await fs.readFile(__dirname+"/../report.pdf")
             
        return file;
    }

}

module.exports = jsReporterService;