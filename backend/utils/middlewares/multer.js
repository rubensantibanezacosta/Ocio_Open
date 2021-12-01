const moment = require('moment');
const multer = require('multer');

module.exports.uploadImage = () => {
    //image settings

    const imageStorage = multer.diskStorage({
        destination: (req, file, cb) => {

            cb(null, __dirname + '/../../assets/gallery')
        },
        filename: (req, file, cb) => { cb(null, moment().unix()) }
    })

    const imageFileFilter = (req, file, cb) => {
        if (!file.originalName.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error("You can only upload images"), false)
        }
        cb(null, true);
    }
    multer({ imageFileFilter, imageStorage });
}