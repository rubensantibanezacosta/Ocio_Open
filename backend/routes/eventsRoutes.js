const express = require("express");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
const EventsController = require("../controllers/eventsController");

//JWT Strategy
require("../utils/auth/strategies/jwt");

function eventsRoutes(app) {
    const router = express.Router();
    app.use("/api/events/", router)
    const eventsController = new EventsController();

    router.post("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['create:events']),
        eventsController.createEvent);

    router.get("/ASC/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:events']),
        eventsController.findAllEventsASC);

    router.get("/DESC/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:events']),
        eventsController.findAllEventsDESC);
    router.get("/bydate/:date",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:events']),
        eventsController.findEventsByDate);

    router.get("/byorganizer/ASC/:organizer",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:events']),
        eventsController.findEventsByOrganizerASC);

    router.get("/byorganizer/DESC/:organizer",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:events']),
        eventsController.findEventsByOrganizerDESC);

    router.get("/byid/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:events']),
        eventsController.findOneEventById);

    router.put("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['update:events']),
        eventsController.updateEvent);

    router.put("/admin/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['adminupdate:events']),
        eventsController.updateEventAdmin);

    /*     router.put("/eventpunctuationavg",
            passport.authenticate("jwt", { session: false }),
            scopesValidationHandler(['update:events']),
            eventsController.updateEventPunctuationAvg); */

    router.delete("/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['delete:events']),
        eventsController.deleteEvent);

    router.delete("/admin/:event_id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['admindelete:events']),
        eventsController.deleteEventAdmin);
}
module.exports = eventsRoutes;
