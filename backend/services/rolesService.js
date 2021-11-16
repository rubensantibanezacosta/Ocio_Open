const db = require("../models");
const Roles = db.roles;

class rolesService {

    findOne(role_key) {
        return Roles.findAll({
            where: {
                role_key: role_key
            }
        });
    }
}

module.exports = rolesService;

