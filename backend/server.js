require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const authApi = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");
const assistantRoutes = require("./routes/assistantRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const imagesRoutes = require("./routes/imagesRoutes");
const punctuationRoutes = require("./routes/punctuationsRoutes");
const zonesRoutes = require("./routes/zonesRoutes");



 
const app = express();
const port = process.env.PORT || 4000;
 
// enable CORS
app.use(cors());
//Multer


// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// database conection
const db = require("./models");

// For explotation. Database is not dropped.
db.sequelize.sync(); 

// Development only. Drops and re-sync db everytime the server starts.
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
//Passport middelware
app.use(passport.initialize());

//routes

authApi(app);
userRoutes(app);
assistantRoutes(app);
commentsRoutes(app);
eventsRoutes(app);
imagesRoutes(app);
punctuationRoutes(app);
zonesRoutes(app);


app.listen(port, () => {
  console.log('Server started on: ' + port);
});