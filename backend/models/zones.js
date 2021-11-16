module.exports = (sequelize, Sequelize) => {
    const Zones = sequelize.define("zones", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        punctuationavg: {
            type: Sequelize.FLOAT
        },

    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'zones',
        }
    );

    return Zones;
};