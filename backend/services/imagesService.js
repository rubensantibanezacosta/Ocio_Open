const db = require("../models");
const Images = db.images;

class ImagesService {

    async createImage(image) {
        return Images.create(image);
    }

    async findAllImages() {
        return Images.findAll();
    }

    async findImageByPk(id) {
        return Images.findByPk(id);
    }

    async deleteImage(id) {
        return Images.destroy({
            where: { id: id }
        })
    }
}

module.exports = ImagesService;