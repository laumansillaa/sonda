const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Curso', {
        title: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        fecha: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        horario:{
            type: DataTypes.STRING,
        
        },
        mainImage: {
            type: DataTypes.STRING,
        }

    })
}