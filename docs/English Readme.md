[Ver en castellano](https://github.com/rubensantibanezacosta/Ocio_Open)

# Ocio Open  *(Training project)*

Repository of the App and the Ocio Open server.

The project is a basic social network that allows, empowers and rewards the organization of social events for the employees of a company.


## Client
![image](https://user-images.githubusercontent.com/44450566/142890754-a330b388-f293-4a12-a665-47dc6995a3ca.png)

[Open Canarias SL](https://www.opencanarias.com/)

## Project Documentation

- [Application requirements report](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/requisites.md)
- [Use case diagram](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/Casos%20de%20Uso.png)
- [Data model](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/Captura%20de%20pantalla%20de%202021-12-03%2011-33-16.png)
- [API Rest Calls Report in Postman](https://documenter.getpostman.com/view/17032586/UVC8E77j)
- [FIGMA designed prototype](https://www.figma.com/proto/avUqIHB3yfnUUCIBHcHBDu/Open-Ocio?node-id=182%3A98&starting-point-node-id=182%3A98)

## Starting

Download Links:

From Github: https://github.com/rubensantibanezacosta/Ocio_Open

## Prerequisites

You need a development environment with:
* [Git](https://git-scm.com) -  https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) -  https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) -  https://nodejs.org/es/download/. 

## Installation instructions

Clone the repository:

```
git clone https://github.com/rubensantibanezacosta/Ocio_Open
```

The project consists of 3 different parts:
* Frontend
* Backend
* Database

You need to have node.js installed in your development environment. Recommended LTS version: https://nodejs.org/es/

Once cloned, you must update the dependencies.

```
cd frontend/
npm install
```
```
cd backend/
npm install
```


* For the frontend, if you want to use the Google login feature, you need to create a client ID by creating a new project on the Google developers website: https://developers.google.com/

On this page you must configure a new project by clicking on create crendentials and Obtain your Google ClientId.

![Captura de pantalla de 2021-11-22 15-04-08](https://user-images.githubusercontent.com/44450566/142885020-f59c7e6d-2fb1-467b-9fa4-b66f516ff12d.png)


In our local environment we can use the default http://localhost:4000 as the origin. For a production deployment, you will have to change/add your deployment url.


You will need to add your credentials to the project on the frontend.

```
REACT_APP_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com
REACT_APP_BASEURL=http://localhost:3000
```


* For your backend:
1. You should create the backend/.env file and fill it with your credentials using the file schema backend/.env.example

MySQL
```
MYSQL_DATABASE="database name"
MYSQL_USER="Username"
MYSQL_PASSWORD=MySQL access key
MYSQL_ROOT_PASSWORD=MySQL access key
DB_HOST=your host address
``` 
Mode
```
NODE_ENV=development
```
 JWT
```
JWT_SECRET="The secret used for the Jwt protocol"
TOKEN_EXPIRE_TIME="Token expiration time in minutes"
TOKEN_EXPIRE_TIME_REMEMBER_ME="Token expiration time in minutes with the remember me box checked"
```
Api key tokens

These keys are automatically generated in the database by executing the script:
```
npm run roleKeysCreate 
``` 
to create, or 
```
npm run roleKeysUpdate 
```
to update them.

Once created, copy and paste them here:
```
PUBLIC_API_KEY_TOKEN=
ADMIN_API_KEY_TOKEN=
```
Domains

```
ACCEPTED_DOMAINS="domains accepted for registration separated by commas. Example: gmail.com,hotmail.com"
```

2. You need a MySQL server running.
3. Create the database in mysql, in your case it should be called ``` ocio_open ```

4. Import the database:  [Database](https://github.com/rubensantibanezacosta/Ocio_Open/blob/main/docs/ocioopenBBDD.sql)



Finally enjoy the project:


```
backend/
npm run dev
```
```
frontend/
ng serve -o
```

If you follow the instructions, you should have three servers started:
* Frontend (http://localhost:4200)
* Backend (http://localhost:4000)
* Mysql (Address selected by yourself in `DB_HOST`)

Enjoy!!!


