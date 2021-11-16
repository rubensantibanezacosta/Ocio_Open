const db = require("../models");
const ImagesService = require("../services/imagesService");

class ImagesController {

    imagesService = new ImagesService();


    createImage = (req, res) => {


        if (!req.body.url ) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }
        const image = {
            url:req.body.url
        }

        this.imagesService.createImage(image)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while saving the image."
                });
            });
    };


    findImageByPk = (req, res) => {
        const id = req.params.id;

        this.imagesService.findImageByPk(id)
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

    findAllImages = (req, res) => {

        this.imagesService.findAllImages()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving images."
                });
            });
    };
    

    deleteImageByPk = (req, res) => {

        const id = req.id;

        this.imagesService.deleteComment(id)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Image was deleted successfully!"
                    });
                } else {
                    res.json({
                        message: `Cannot delete image. Maybe image was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).json({

                    message:
                        err + " Could not delete image"
                });
            });

    }
}
module.exports = ImagesController;
