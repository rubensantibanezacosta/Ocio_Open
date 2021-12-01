
const db = require("../models");
const EventsService = require("../services/eventsService");
const moment= require("moment");

class EventsController {

    eventsService = new EventsService();


    createEvent = (req, res) => {

        // Validate request
        if (!req.body.tittle || !req.body.date || !req.body.place || !req.body.organizer || !req.body.zone) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }
        const event = {
            tittle: req.body.tittle,
            date: req.body.date,
            zone: req.body.zone,
            place: req.body.place,
            description:req.body.description,
            punctuation_avg: 0,
            organizer: req.body.organizer,
            image_id: req.body.image_id,
        }

        
        this.eventsService.createEvent(event)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while saving the event."
                });
            });
    };

    findAllEventsDESC = (req, res) => {

        this.eventsService.findAllEventsDESC()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving events."
                });
            });
    };

    findAllEventsASC = (req, res) => {

        this.eventsService.findAllEventsASC()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving events."
                });
            });
    };

    findEventsByDate = (req, res) => {
        const date =moment(req.params.date).format("YYYY-MM-DD");
        console.log(date);

        this.eventsService.findEventsByDate(date)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving events."
                });
            });
    };

    findEventsByOrganizer = (req, res) => {
        const organizer = req.params.organizer;

        this.eventsService.findEventsByOrganizer(organizer)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving punctuations."
                });
            });
    };

    findOneEventById = (req, res) => {
        const event_id = req.params.event_id;

        this.eventsService.findOneEventById(event_id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving event."
                });
            });
    };

    updateEvent = (req, res) => {

        // Validate request
        if (!req.body.tittle || !req.body.date || !req.body.place || !req.body.organizer || !req.body.zone || !req.body.event_id) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }

        const event = {
            event_id: req.body.event_id,
            tittle: req.body.tittle,
            date: req.body.date,
            zone: req.body.zone,
            place: req.body.place,
            description:req.body.description,
            organizer: req.body.organizer,
            image_url: req.body.image_url,
        }

        this.eventsService.updateEvent(event)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while updating event."
                });
            });
    };
    updateEventPunctuationAvg = (req, res) => {

        const event = {
            punctuation_avg: req.body.punctuation_avg
        }
        const event_id = req.params.event_id;

        this.eventsService.updateEvent(event)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while updating event."
                });
            });
    };

    deleteEvent = (req, res) => {
        const event_id = req.params.event_id;

        this.eventsService.deleteEvent(event_id)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Event was deleted successfully!"
                    });
                } else {
                    res.json({
                        message: `Cannot delete Event. Maybe Event was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).json({

                    message:
                        err + " Could not delete event"
                });
            });

    }
}
module.exports = EventsController;
