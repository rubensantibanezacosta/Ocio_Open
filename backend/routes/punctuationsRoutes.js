const express = require("express");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
const PunctuationsController = require("../controllers/punctuationsController");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function punctuationsRoutes(app) {
    const router = express.Router();
    app.use("/api/punctuations", router)
    const punctuationsController = new PunctuationsController();

    router.post("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['create:punctuations']),
        punctuationsController.createOrUpdatePunctuation);

    router.get("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:punctuations']),
        punctuationsController.findAllPunctuations);

    router.get("/byevent/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:punctuations']),
        punctuationsController.findPunctuationsByEvent);

    router.get("/byorganizer/:organizer",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:punctuations']),
        punctuationsController.findPunctuationByOrganizer);

    router.get("/bypk/:event_id/:assistant",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:punctuations']),
        punctuationsController.findPunctuationByPk);

    
}

module.exports = punctuationsRoutes;
