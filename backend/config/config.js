require('dotenv').config();
const config = {

  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    frontendBasicEndpoint: process.env.FRONTEND_BASIC_ENDPOINT,

    jwtSecret: process.env.JWT_SECRET,
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    acceptedDomains: process.env.ACCEPTED_DOMAINS,
    tokenExpireTime: process.env.TOKEN_EXPIRE_TIME,
    tokenExpireTimeRememberMe: process.env.TOKEN_EXPIRE_TIME_REMEMBER_ME,
    frontendEndpoint: process.env.FRONTEND_ENDPOINT,
    emailApiName:process.env.EMAIL_API_NAME,
    emailPassword:process.env.EMAIL_PASSWORD,
    

  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',

    jwtSecret: process.env.JWT_SECRET,
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    acceptedDomains: process.env.ACCEPTED_DOMAINS,
    tokenExpireTime: process.env.TOKEN_EXPIRE_TIME,
    tokenExpireTimeRememberMe: process.env.TOKEN_EXPIRE_TIME_REMEMBER_ME,
    frontendEndpoint: process.env.FRONTEND_ENDPOINT,
    emailApiName:process.env.EMAIL_API_NAME,
    emailPassword:process.env.EMAIL_PASSWORD,
    frontendBasicEndpoint: process.env.FRONTEND_BASIC_ENDPOINT,

  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',

    jwtSecret: process.env.JWT_SECRET,
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    acceptedDomains: process.env.ACCEPTED_DOMAINS,
    tokenExpireTime: process.env.TOKEN_EXPIRE_TIME,
    tokenExpireTimeRememberMe: process.env.TOKEN_EXPIRE_TIME_REMEMBER_ME,
    frontendEndpoint: process.env.FRONTEND_ENDPOINT,
    emailApiName:process.env.EMAIL_API_NAME,
    emailPassword:process.env.EMAIL_PASSWORD,
    frontendBasicEndpoint: process.env.FRONTEND_BASIC_ENDPOINT,
  }

}

module.exports = config;