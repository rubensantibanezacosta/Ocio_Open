
const db = require("../models");
const EventsService = require("../services/eventsService");
const moment = require("moment");
const EmailService = require("../services/emailService");

class EventsController {

    eventsService = new EventsService();
    emailService = new EmailService();


    createEvent = (req, res) => {

        // Validate request
        if (!req.body.tittle || !req.body.date || !req.body.place || !req.body.zone) {
            res.status(400).send(
                "Content cannot be empty!"
            );
            return;
        }
        const event = {
            tittle: req.body.tittle,
            date: req.body.date,
            zone: req.body.zone,
            place: req.body.place,
            description: req.body.description,
            punctuation_avg: 0,
            organizer: req.user.dataValues.email,
            image_id: req.body.image_id,
        }


        this.eventsService.createEvent(event)
            .then(data => {
                //mailing
                this.emailService.newEventToAllUsers(event.organizer, event);
                this.emailService.newEventToOrganizer(event.organizer, event);
                //response
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while saving the event."
                );
            });
    };

    findAllEventsDESC = (req, res) => {

        this.eventsService.findAllEventsDESC()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while retrieving events."
                );
            });
    };

    findAllEventsASC = (req, res) => {

        this.eventsService.findAllEventsASC()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                    
                        err + " Some error occurred while retrieving events."
                );
            });
    };

    findEventsByDate = (req, res) => {
        const date = moment(req.params.date).format("YYYY-MM-DD");


        this.eventsService.findEventsByDate(date)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while retrieving events."
                );
            });
    };

    findEventsByOrganizerASC = (req, res) => {
        const organizer = req.user.dataValues.email;

        this.eventsService.findEventsByOrganizerASC(organizer)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while retrieving punctuations."
                );
            });
    };

    findEventsByOrganizerDESC = (req, res) => {
        const organizer = req.user.dataValues.email;

        this.eventsService.findEventsByOrganizerDESC(organizer)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while retrieving punctuations."
                );
            });
    };

    findOneEventById = (req, res) => {
        const event_id = req.params.event_id;

        this.eventsService.findOneEventById(event_id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while retrieving event."
                );
            });
    };

    updateEvent = (req, res) => {

        if (req.body.organizer != req.user.dataValues.email) {
            res.status(401).send(
                "Only organizer cans to edit event!"
            );
            return;
        }

        const event = {
            event_id: req.body.event_id,
            tittle: req.body.tittle,
            date: req.body.date,
            zone: req.body.zone,
            place: req.body.place,
            description: req.body.description,
            image_id: req.body.image_id,
        }

        this.eventsService.updateEvent(event)
            .then(data => {
                //mailing
                this.emailService.updateEventToOrganizer(req.user.dataValues.email, event.event_id)
                this.emailService.updateEventToAssistants(req.user.dataValues.email, event.event_id)
                //response
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while updating event."
                );
            });
    };

    updateEventAdmin = (req, res) => {
        // Validate request

        if (!req.body.tittle || !req.body.place || !req.body.zone || !req.body.event_id) {
            res.status(400).send(
                "Content cannot be empty!"
            );
            return;
        }


        const event = {
            event_id: req.body.event_id,
            tittle: req.body.tittle,
            date: req.body.date,
            zone: req.body.zone,
            place: req.body.place,
            description: req.body.description,
            image_id: req.body.image_id,
        }

        this.eventsService.updateEvent(event)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while updating event."
                );
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
                res.status(500).send(
                        err + " Some error occurred while updating event."
                );
            });
    };

    deleteEvent = (req, res) => {
        const event_id = req.params.event_id;
        const eventUpdated;
        this.eventsService.findOneEventById(event_id).then((event) => {
            eventUpdated=event;
            if (event.organizer != req.user.dataValues.email) {
                res.status(401).send(
                "Only organizer cans to delete a event!"
                );
                return;
            }
            this.eventsService.deleteEvent(event_id)
                .then(num => {
                    if (num == 1) {
                        //mailing
                        this.emailService.deleteEventToOrganizer(event.organizer, eventUpdated);
                        this.emailService.deleteEventToAssistants(event.organizer, eventUpdated);
                        //response
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
                    res.status(500).send(
                            err + " Could not delete event"
                    );
                });
        })
    }

    deleteEventAdmin = (req, res) => {
        const event_id = req.params.event_id;


        this.eventsService.deleteEvent(event_id)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Event was deleted successfully!"
                    });
                } else {
                    res.send(
                        `Cannot delete Event. Maybe Event was not found!`
                    );
                }
            })
            .catch(err => {
                res.status(500).send(
                        err + " Could not delete event"
                );
            });
    }
}

module.exports = EventsController;
