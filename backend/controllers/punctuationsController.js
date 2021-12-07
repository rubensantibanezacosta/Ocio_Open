
const db = require("../models");
const PunctuationsService = require("../services/punctuationsService");
const AvgPunctuationUpdaterService = require("../services/avgPunctuationUpdater");
const EventsService = require("../services/eventsService");

class PunctuationsController {

    punctuationsService = new PunctuationsService();


    createOrUpdatePunctuation = (req, res) => {
        

        if (!req.body.event_id || !req.body.assistant || !req.body.punctuation) {
            res.status(400).send(
                "Content cannot be empty!"
            );
            return;
        }

        const punctuation = {
            event_id: req.body.event_id,
            assistant: req.body.assistant,
            punctuation: req.body.punctuation,
        }
        let punctuationExists;
        this.punctuationsService.findPunctuationByPk(req.body.event_id, req.body.assistant).then(data=>{return this.punctuationExists=data}).then(()=>{
            
            if (!this.punctuationExists[0]) {
                
                this.punctuationsService.createPunctuation(punctuation)
                    .then(data => {
                        
                        const avgPunctuationUpdaterService= new AvgPunctuationUpdaterService();
                        const eventsService = new EventsService();
                        
                        eventsService.findOneEventById(req.body.event_id).then((event)=>{
                            avgPunctuationUpdaterService.updateAvgPunctuations(req.body.event_id,event.organizer);
                        res.status(201).json(data);
                        }) 
                    })
                    .catch(err => {
                        res.status(500).send(
                          
                                err + " Some error occurred while saving the punctuation."
                       );
                    });
    
            } else {
                this.punctuationsService.updatePunctuation(punctuation)
                    .then(data => {
                        
                        const avgPunctuationUpdaterService= new AvgPunctuationUpdaterService();
                        const eventsService = new EventsService();
                        
                        eventsService.findOneEventById(req.body.event_id)
                        .then((event)=>{
                        avgPunctuationUpdaterService.updateAvgPunctuations(req.body.event_id,event.organizer);
                        res.status(200).json(data);
                        });
                        
                    })
                    .catch(err => {
                        res.status(500).json(
                            
                                err + " Some error occurred while updating punctuations."
                        );
                    });
            }
            
        });
       
        
        
    };

    findAllPunctuations = (req, res) => {

        this.punctuationsService.findAllPunctuations()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                  
                        err + " Some error occurred while retrieving punctuations."
                );
            });
    };

    findPunctuationsByEvent = (req, res) => {
        const event_id = req.params.event_id;

        this.punctuationsService.findPunctuationsByEvent(event_id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                    
                        err + " Some error occurred while retrieving punctuations."
                );
            });
    };

    findPunctuationByOrganizer = (req, res) => {
        const organizer = req.params.organizer;

        this.punctuationsService.findPunctuationByOrganizer(organizer)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                        err + " Some error occurred while retrieving punctuations."
                );
            });
    };


    findPunctuationByPk = (req, res) => {
        const event_id = req.params.event_id;
        const assistant = req.params.assistant;

        this.punctuationsService.findPunctuationByPk(event_id, assistant)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                    
                        err + " Some error occurred while retrieving punctuations."
                );
            });
    };


    deletePunctuationByPk = (req, res) => {
        const event_id = req.params.event_id;
        const assistant = req.params.assistant;

        this.punctuationsService.deletePunctuation(event_id, assistant)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Punctuation was deleted successfully!"
                    });
                } else {
                    res.json({
                        message: `Cannot delete Punctuation. Maybe Punctuation was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send(

                        err + " Could not delete Punctuation"
                );
            });

    }
}

module.exports = PunctuationsController;
