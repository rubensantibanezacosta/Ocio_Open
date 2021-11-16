module.exports = (sequelize, Sequelize) => {
    const Assistants = sequelize.define("assistants", {
        event_id: {
            type: Sequelize.FLOAT,
            primaryKey: true,
            references: {
                model: 'events',
                key: 'event_id',
            }
        },
        assistant: {
            type: Sequelize.STRING,
            primaryKey: true,
            references: {
                model: 'users',
                key: 'email',
            }
        },
        attendance: {
            type: Sequelize.BOOLEAN,
        },
        excuse: {
            type: Sequelize.STRING,
            nullable: true
        },
    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'assistants',

        }
    );
    Assistants.associate = function (models) {
        // associations can be defined here
        Assistants.hasOne(models.events, {
            foreignKey: 'event_id',
        })
    };
    Assistants.associate = function (models) {
        // associations can be defined here
        Assistants.hasOne(models.users, {
            foreignKey: 'email',
            constraints: false
        })
    };

    return Assistants;
};