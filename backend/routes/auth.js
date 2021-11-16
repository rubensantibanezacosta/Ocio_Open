const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const RolesService = require("../services/rolesService");
const UserService = require("../services/usersService");
const moment = require("moment");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../config/config')[env];


function authApi(app) {
    const router = express.Router();
    app.use("/api/auth", router);

    const rolesService = new RolesService();
    const userService = new UserService();


    router.post("/sign-in", async function (req, res, next) {
        const rememberMe = req.body.rememberMe;
        const apiKeyToken = req.body.apiKeyToken || config.publicApiKeyToken;
        const bodyUser = req.body.user;

        if (!config.acceptedDomains.split(",").includes(bodyUser.email.split("@")[1])) {
            console.log("domain not allowed")
            return cb(boom.unauthorized("Domain unauthorized"), false);
        }

        try {

            const ResUser = userService.findOne(bodyUser.email).then(
                (error, user) => {

                    if (error) {
                        return (error, null);
                    }

                    if (!user) {
                        const User = {
                            email: bodyUser.email,
                            name: bodyUser.name,
                            surname: bodyUser.surname,
                            image_url: bodyUser.image_url,
                            role: "user",
                            punctuation_avg: 0,
                            lastconection: moment().format()
                        }
                        return (null, User);
                    }

                    if (user) {
                        const User = {
                            email: bodyUser.email,
                            name: bodyUser.name,
                            surname: bodyUser.surname,
                            image_url: bodyUser.image_url,
                            lastconection: moment().format()
                        }
                        return (null, User);

                    }
                }
            )
            req.login(bodyUser, { session: false }, async function (error) {
                if (error) {
                    next(error);
                }
                const apiKey = await rolesService.findOne(apiKeyToken);

                if (!apiKey) {
                    next(boom.unauthorized());
                }


                const expireTime = rememberMe ?
                config.tokenExpireTimeRememberMe:config.tokenExpireTime;
                
                const expireDate = moment.utc().add(expireTime, "minutes");
                const email = bodyUser.email;
                const payload = {
                    username: email,
                    scopes: apiKey[0].permissions.split(","),
                    tokenExpiresIn: expireDate
                }

                const token = jwt.sign(payload, config.jwtSecret, {
                    expiresIn: expireTime + "m"
                });

                return res.status(200).json({ token, expireDate: expireDate, user: { email } })
            })

        } catch (error) {
            next(error);
        }
    })
}

module.exports = authApi;