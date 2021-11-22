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
        image_url: {
            type: Sequelize.STRING,
        },
    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'events',

        }
    );
    Events.associate = function (models) {
        [
            Events.belongsTo(models.users, {
                as: 'organizerdata',
                foreignKey: 'organizer',
                constraints: false
            }),
            // associations can be defined here
            Events.hasMany(models.assistants, {
                as: 'assistants',
                foreignKey: 'event_id',
                constraints: false
            }),
            Events.hasMany(models.comments, {
                foreignKey: 'event_id',
                constraints: false
            })

        ]



    };

    return Events;
};