# Ocio Open

Repositorio de la App y el servidor de Ocio Open.

El proyecto es una red social básica, que permite, potencia y premia la organización de eventos sociales para los empleados de una empresa.



## Cliente
![image](https://user-images.githubusercontent.com/44450566/142890754-a330b388-f293-4a12-a665-47dc6995a3ca.png)

[Open Canarias SL](https://www.opencanarias.com/)

## Documentación del Proyecto

- [Informe de requisitos de la aplicación](https://www.opencanarias.com/)
- [Diagrama de casos de uso](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/Casos%20de%20Uso.png)
- [Diagrama Entidad Relación ](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/Captura%20de%20pantalla%20de%202021-11-14%2021-48-39.png)
- [Informe de llamadas API Rest en Postman](https://documenter.getpostman.com/view/17032586/UVC8E77j)
- [Prototipo diseñado con FIGMA](https://www.figma.com/proto/avUqIHB3yfnUUCIBHcHBDu/Open-Ocio?node-id=182%3A98&starting-point-node-id=182%3A98)

## Comenzando

Link de descarga:

Desde Github: https://github.com/rubensantibanezacosta/Ocio_Open

## Prerequisitos

Necesitas un entorno de desarrollo con:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## Instrucciones de instalación
The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/rubensantibanezacosta/Ocio_Open
```

El proyecto consta de 3 partes diferenciadas:
* Frontend
* Backend
* Base de datos

Necesitas tener instalado node.js en tu entorno de desarrollo. Version LTS recomendada: https://nodejs.org/es/

Una vez clonado, debes actualizar las dependencias.

```
cd frontend/
npm install
```
```
cd backend/
npm install
```


* Para el frontend, si desea utilizar la función de inicio de sesión de Google, debe crear un ID de cliente creando un nuevo proyecto en el sitio web de desarrolladores de Google: https://developers.google.com/

En esta pagina deberá configurar un nuevo proyecto haciendo click en crear crendenciales y Obtener tu Google ClientId.

![Captura de pantalla de 2021-11-22 15-04-08](https://user-images.githubusercontent.com/44450566/142885020-f59c7e6d-2fb1-467b-9fa4-b66f516ff12d.png)


En nuestro entorno local podemos usar el http://localhost:4000 predeterminado como origen. Para una implementación de producción, tendrá que cambiar/agregar su URL de implementación.


Deberá agregar sus credenciales al proyecto en el frontend.

```
REACT_APP_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com
REACT_APP_BASEURL=http://localhost:3000
```


* Para su backend:
1. Debera crear el archivo backend/.env y rellenarlo con sus credenciales utilizando es esquema del archivo backend/.env.example

MySQL
```
MYSQL_DATABASE="nombre de la base de datos"
MYSQL_USER="nombre de usuario"
MYSQL_PASSWORD=clave de acceso de MySQL
MYSQL_ROOT_PASSWORD=clave de acceso de MySQL
DB_HOST=su direccion de host
``` 
Mode
```
NODE_ENV=development
```
 JWT
```
JWT_SECRET="El secret utilizado para el protocolo Jwt"
TOKEN_EXPIRE_TIME="Tiempo de expiración del token en minutos"
TOKEN_EXPIRE_TIME_REMEMBER_ME="Tiempo de expiración del token en minutos con la casilla remember me marcada"
```
Api key tokens

Éstas claves se generan automaticamente en la base de datos ejecutando el script:
```
npm run roleKeysCreate 
``` 
para crearlas, o 
```
npm run roleKeysUpdate 
```
para actualizarlas.

Una vez creadas, copielas y péguelas aqui:

```
PUBLIC_API_KEY_TOKEN=
ADMIN_API_KEY_TOKEN=
```
Domains

```
ACCEPTED_DOMAINS="dominios aceptados para el registro separados por comas. Ejemplo: gmail.com,hotmail.com"
```

2. Necesita un servidos MySQL funcionando.

3. Cree la base de datos the mysql database, en su caso debe llamarse ``` ocio_open ```

4. Importe la base de datos:  [Base de datos](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/ocioopenBBDD.sql)



Finalmente disfrute del proytecto:


```
root/
npm start
```

Si sigue las instrucciones debera tener arrancados tres servidores:
* Frontend (http://localhost:4200)
* Backend (http://localhost:4000)
* Mysql (Dirección seleccionada por usted en `DB_HOST`)

Disfrute!!!


