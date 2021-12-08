const db = require("../models");
const CommentsService = require("../services/commentsService");
const moment = require("moment");

class ComentsController {

    comentsService = new CommentsService();

    createComment = (req, res) => {
            

        if (!req.body.event_id || !req.body.assistant || !req.body.comment) {
            res.status(400).send(
                "Content cannot be empty!"
            );
            return;
        }
        const comment = {
            event_id: req.body.event_id,
            assistant: req.body.assistant,
            comment: req.body.comment,
            date: moment().format()
        }

        this.comentsService.createComment(comment)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).send(
                    
                        err + " Some error occurred while saving the comment."
                );
            });
    };


    findCommentsByEvent = (req, res) => {
        const event_id = req.params.event_id;

        this.comentsService.findCommentsByEvent(event_id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).send(
                
                        err + " Some error occurred while retrieving asisstants."
                );
            });
    };
    

    deleteCommentById = (req, res) => {

        const comment_id = req.params.comment_id;

        this.comentsService.deleteComment(comment_id)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Comment was deleted successfully!"
                    });
                } else {
                    res.json({
                        message: `Cannot delete comment. Maybe comment was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send(

                        err + " Could not delete comment"
                );
            });

    }
}
module.exports = ComentsController;
