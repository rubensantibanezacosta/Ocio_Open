module.exports = (sequelize, Sequelize) => {
    const Punctuations = sequelize.define("punctuations", {
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
        punctuation: {
            type: Sequelize.FLOAT,
        },
    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'punctuations',

        }
    );
    Punctuations.associate = function (models) {
        // associations can be defined here
        Punctuations.hasOne(models.events, {
            foreignKey: 'event_id',
        })
    };
    Punctuations.associate = function (models) {
        // associations can be defined here
        Punctuations.hasOne(models.users, {
            foreignKey: 'email',
        })
    };


    return Punctuations;
};