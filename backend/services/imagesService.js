const db = require("../models");
const Images = db.images;

class ImagesService {

    async createImage(image) {
        return Images.create(image);
    }

    async findAllImages() {
        return Images.findAll({
            order:[["id","DESC"]]
        });
    }

    async findImageByPk(id) {
        return Images.findByPk(id);
    }
    async findImageByName(name) {
        return Images.findAll({where:{
            url: name
        }});
    }

    async deleteImage(id) {
        return Images.destroy({
            where: { id: id }
        })
    }
}

module.exports = ImagesService;