module.exports = (sequelize, Sequelize) => {
    const Events = sequelize.define("events", {
        event_id: {
            type: Sequelize.FLOAT,
            autoIncrement: true,
            primaryKey: true
        },
        tittle: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.DATE,
        },
        zone: {
            type: Sequelize.STRING,
        },
        place: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        punctuation_avg: {
            type: Sequelize.FLOAT,
        },
        organizer: {
            type: Sequelize.STRING,
            references: {
                model: 'users',
                key: 'email',
            }
        },
    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'events',

        }
    );
    Events.associate = function (models) {
        // associations can be defined here
        Events.hasOne(models.users, {
            foreignKey: 'email',
            constraints: false
        })
    };

    return Events;
};