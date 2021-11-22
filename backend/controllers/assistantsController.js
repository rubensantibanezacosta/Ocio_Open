const db = require("../models");
const AssistantService = require("../services/assistantService");

class AssistantsController {

    assistantsService = new AssistantService();


    createOrUpdateAssistant = (req, res) => {



        if (!req.body.event_id || !req.body.assistant) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }



        const assistant = {
            event_id: req.body.event_id,
            assistant: req.body.assistant,
            attendance: req.body.attendance,
            excuse: req.body.excuse
        };

        this.assistantsService.findAssistantByPk(assistant.event_id, assistant.assistant).then((response)=>{
            if (!response.length>0) {
                this.assistantsService.createAsisstant(assistant)
                    .then(data => {
                        res.status(201).json(data);
                    })
                    .catch(err => {
                        res.status(500).json({
                            message:
                                err + " Some error occurred while creating the assistant."
                        });
                    });
    
            } else {
    
                this.assistantsService.updateAssistant(assistant)
                    .then(data => {
                        res.status(200).json(data);
                    })
                    .catch(err => {
                        res.status(500).json({
                            message:
                                err + " Some error occurred while updating assistant."
                        });
                    });
            }


        });
       
        
    };


    findAssistantByPk = (req, res) => {
        const event_id = req.params.event_id;
        const asisstant = req.params.assistant;
        this.assistantsService.findAssistantByPk(event_id, asisstant)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving asisstants."
                });
            });
    };


    findAllAssistantsByEvent = (req, res) => {
        const event_id = req.params.event_id;
        this.assistantsService.findAllAssistantsByEvent(event_id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving asisstants."
                });
            });
    };

    findAllNotAssistantsByEvent = (req, res) => {
        const event_id = req.params.event_id;
        this.assistantsService.findAllNotAssistantsByEvent(event_id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving asisstants."
                });
            });
    };


    findAllAsisstants = (req, res) => {

        this.assistantsService.findAllAssistants()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving cities."
                });
            });
    };


    updateAssistant = (req, res) => {

        if (!req.body.event_id || !req.body.assistant) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }

        const assistant = {
            event_id: req.body.event_id,
            assistant: req.body.assistant,
            attendance: req.body.attendance,
            excuse: req.body.excuse
        };

        this.assistantsService.updateAssistant(assistant)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while updating assistant."
                });
            });
    };


    deleteAsisstantbyPk = (req, res) => {

        const event_id = req.params.event_id;
        const assistant = req.params.assistant;

        this.assistantsService.deleteAssistantByPk(event_id, assistant)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Asisstant was deleted successfully!"
                    });
                } else {
                    res.json({

                        message: `Cannot delete asisstant. Maybe assistant was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).json({

                    message:
                        err + " Could not delete asisstant"
                });
            });

    }
}

module.exports = AssistantsController;
