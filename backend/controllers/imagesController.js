const db = require("../models");
const ImagesService = require("../services/imagesService");
const fs = require('fs');
var path = require('path');


class ImagesController {
 imagesService=new ImagesService();

    findImageByPk = (req, res) => {
        const id = req.params.id;

        this.imagesService.findImageByPk(id)
            .then(data => {
                
                let image = fs.readFileSync(__dirname+"/../assets/gallery/"+data.url)
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                res.end(image, 'binary');
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving image."
                });
            });
    };

    findImageByName = (req, res) => {
        const name = req.file.filename;

        this.imagesService.findImageByName(name)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while uploading image."
                });
            });
    };

    findAllImages = (req, res) => {

        this.imagesService.findAllImages()
            .then(data => {
                res.status(200).json(data)
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
