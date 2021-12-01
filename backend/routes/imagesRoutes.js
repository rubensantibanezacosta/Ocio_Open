const express = require("express");
const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
const ImagesController = require("../controllers/imagesController");
const moment = require('moment');
const multer = require('multer');
const ImagesService = require("../services/imagesService");


//JWT Strategy
require("../utils/auth/strategies/jwt");

const storage = multer.diskStorage({
    limits: {
        fieldNameSize: 300,
        fileSize: 1048576, // 10 Mb
    },
    fileFilter: (req, file, callback) => {
        const acceptableExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
        if (!(acceptableExtensions.includes(Path.extname(file.originalname)))) {
            return callback(new Error('...'));
        }
    },
    filename: function (req, file, cb) {
        const imagesService = new ImagesService();
        const fileName = moment().unix() + '.' + file.originalname.split(".").pop();
        const image = {
            url: fileName,
        }
        imagesService.createImage(image);
        cb(null, fileName)
    },
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../assets/gallery')
    },
})

const upload = multer({ storage: storage })


function imagesRoutes(app) {

    const router = express.Router();
    app.use("/api/images", router)
    const imagesController = new ImagesController();

    //multer



    router.post("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['create:images']),
        upload.single('uploadedImage'), 
        imagesController.findImageByName);
            

    router.get("/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:images']),
        imagesController.findAllImages);

    router.get("/:id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['read:images']),
        imagesController.findImageByPk);

    router.delete("/:id",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(['delete:images']),
        imagesController.deleteImageByPk);

}

module.exports = imagesRoutes;
