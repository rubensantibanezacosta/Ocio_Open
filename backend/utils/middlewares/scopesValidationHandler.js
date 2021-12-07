const boom = require("@hapi/boom");

function scopesValidationHandler(allowedScopes) {
    return function (req, res, next) {
        if (!req.user || (req.user && !req.user.scopes)) {
            res.status(401).send("Missing scopes")
            next(boom.unauthorized());
        }

        const hasAccess = allowedScopes
            .map(allowedScope => req.user.scopes.includes(allowedScope))
            .find(allowed => Boolean(allowed));

        if (!hasAccess) {
            res.status(401).send("Insufficient scopes")
            return next(boom.unauthorized());
        }
        next();

    }
}
module.exports = scopesValidationHandler;