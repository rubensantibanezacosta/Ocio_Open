const express = require("express");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
const CommentsController = require("../controllers/commentsController");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function commentsRoutes(app) {
    const router = express.Router();
    app.use("/api/comments", router)
    const commentsController = new CommentsController();

    router.post("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['create:comments']),
        commentsController.createComment);

    router.get("/byevent/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:comments']),
        commentsController.findCommentsByEvent);

    router.delete("/:comment_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['delete:comments']),
        commentsController.deleteCommentById);

}

module.exports = commentsRoutes;
