const express = require("express");
const UserController = require("../controllers/userController");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function userRoutes(app) {
  const router = express.Router();
  app.use("/api/user", router)
  const userController = new UserController();

  router.post("/",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(['create:users']),
    userController.createOrUpdateUser);

  router.get("/",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(['read:users']),
    userController.findAllUsers);

  router.get("/:email",
  passport.authenticate("jwt", { session: false }),
  scopesValidationHandler(['read:users']),
    userController.findOneUser);

    router.get("/position/:email",
  passport.authenticate("jwt", { session: false }),
  scopesValidationHandler(['read:users']),
    userController.getUserPosition);

  router.put("/userpunctuationavg/",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(['update:users']),
    userController.updateUserPunctuationAvg);

  router.delete("/:email",
    passport.authenticate("jwt", { session: false }),
    scopesValidationHandler(['delete:users']),
    userController.deleteUser);

}
module.exports = userRoutes;
