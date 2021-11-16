const db = require("../models");
const Users = db.users;
class UserService {

  async createUser(user) {
    return Users.create(user);
  }

  async findAll() {
    return Users.findAll({order:[['punctuation_avg','DESC']]});
  }

  async findOne(email) {
    return Users.findByPk(email);
  }

  async update(user) {
    return Users.update(user, {
      where: { email: user.email }
    })
  }

  async deleteOne(email) {
    return Users.destroy({
      where: { email: email }
    })
  }
}

module.exports = UserService;