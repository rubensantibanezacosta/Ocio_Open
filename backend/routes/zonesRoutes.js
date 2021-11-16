const express = require("express");
const ZonesController = require("../controllers/zonesController");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function zonesRoutes(app) {
    const router = express.Router();
    app.use("/api/zones", router)
    const zonesController = new ZonesController();


    router.get("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:zones']),
        zonesController.findAllZones);


}
module.exports = zonesRoutes;
