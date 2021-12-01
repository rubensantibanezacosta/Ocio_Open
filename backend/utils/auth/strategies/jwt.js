const passport = require('passport');
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");
const moment = require("moment");

const UserService = require("../../../services/usersService");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../../../config/config')[env];

passport.use(
    new Strategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken() 
    },
   
        async function (tokenPayload, cb) {
            const userService = new UserService();
            

            try {
                
                const user = await userService.findOne(tokenPayload.username);
                if (!user) {
                    return cb(boom.unauthorized(), false);
                }
                const userConnectionUpdate={
                    email:user.email,
                    lastconnection: moment().format()
                }
                userService.update(userConnectionUpdate);
                cb(null, { ...user, scopes: tokenPayload.scopes })

            } catch (error) {
                cb(error);
            }
        }
    ))