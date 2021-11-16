const db = require("../models");
const Users = db.zones;
class ZonesService {

    async createZone(user) {
        return Users.create(user);
    }

    async findAllZones() {
        return Users.findAll({ order: [['punctuationavg','DESC']] });
    }

    async findOneZone(id) {
        return Users.findByPk(id);
    }

    async updateZone(zone) {
        return Users.update(zone, {
            where: { id: zone.id }
        })
    }

    async deleteZone(id) {
        return Users.destroy({
            where: { id: id }
        })
    }
}

module.exports = ZonesService;