module.exports = (sequelize, Sequelize) => {
    const Images = sequelize.define("images", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: Sequelize.STRING,
        },
    },
        { // Condiciones del objeto con relación a la tabla de los datos
            tableName: 'images',

        }
    );

    return Images;
};