const boom = require("@hapi/boom");

function emailValidationHandler() {

    //email validation with REGEX

    return function (req, res, next) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(req.body.username).toLowerCase())) {
            next();
        } else {
            next(boom.badData("Email must be valid"));
        }
    }
}
module.exports = emailValidationHandler;