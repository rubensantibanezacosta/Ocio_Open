module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define("roles", {
        number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        role_key: {
            type: Sequelize.STRING,
        },
        permissions: {
            type: Sequelize.STRING
        },

    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'roles',
        }
    );

    return Roles;
};