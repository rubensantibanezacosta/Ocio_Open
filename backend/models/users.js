module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING,
    },
    image_url: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    punctuation_avg: {
      type: Sequelize.FLOAT,
    },
    lastconnection: {
      type: Sequelize.STRING,
    },
  },
    { // Condiciones del objeto con relación a la tabla de los datos
      tableName: 'users',
    }
  );

  return Users;
};