require('dotenv').config();
const config = {

  development: {

    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    acceptedDomains: process.env.ACCEPTED_DOMAINS,
    host:process.env.HOST,

  },
  test: {

    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    acceptedDomains: process.env.ACCEPTED_DOMAINS,
    host:process.env.HOST,
  },
  production: {

    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    acceptedDomains: process.env.ACCEPTED_DOMAINS,
    host:process.env.HOST,
  }

}

module.exports = config;