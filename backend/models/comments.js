module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        comment_id: {
            type: Sequelize.FLOAT,
            autoIncrement: true,
            primaryKey: true
        },
        event_id: {
            type: Sequelize.FLOAT,
            references: {
                model: 'events',
                key: 'event_id',
            }
        },
        assistant: {
            type: Sequelize.STRING,
            references: {
                model: 'users',
                key: 'email',
            }
        },
        comment: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.DATE(6),
        },
    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'comments',
            timeStamp:false,
            createdAt:false,
            updatedAt:false

        }
    );
    Comments.associate = function (models) {[
        // associations can be defined here
        Comments.belongsTo(models.events, {
            foreignKey: 'event_id',
            constraints: false
        }),
        // associations can be defined here
        Comments.belongsTo(models.users, {
            foreignKey: 'assistant',
            constraints: false
        })]
    };


    return Comments;
};