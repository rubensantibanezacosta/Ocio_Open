const express = require("express");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
const ImagesController = require("../controllers/imagesController");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function imagesRoutes(app) {
    const router = express.Router();
    app.use("/api/images", router)
    const imagesController = new ImagesController();

    router.post("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['create:images']),
        imagesController.createImage);

        router.get("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:images']),
        imagesController.findAllImages);

    router.get("/:id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:images']),
        imagesController.findImageByPk);

    router.delete("/:id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['delete:images']),
        imagesController.deleteImageByPk);

}

module.exports = imagesRoutes;
