const express = require("express");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
const AssistantsController = require("../controllers/assistantsController");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function asisstantRoutes(app) {
    const router = express.Router();
    app.use("/api/assistant", router)
    const assistantsController = new AssistantsController();

    router.post("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['create:assistants']),
        assistantsController.createAssistant);

    router.get("/bypk/:event_id/:assistant",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:assistants']),
        assistantsController.findAssistantByPk);

    router.get("/byevent/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:assistants']),
        assistantsController.findAllAssistantsByEvent);

    router.get("/byeventnot/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:assistants']),
        assistantsController.findAllNotAssistantsByEvent);

    router.get("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:assistants']),
        assistantsController.findAllAsisstants);

    router.put("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['delete:assistants']),
        assistantsController.updateAssistant);

    router.delete("/:event_id/:assistant",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['delete:assistants']),
        assistantsController.deleteAsisstantbyPk);

}

module.exports = asisstantRoutes;
