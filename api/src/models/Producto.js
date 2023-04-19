const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Producto', {
        nombre: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        img: {
            type: DataTypes.STRING,

        },
        catalogo: {
            type: DataTypes.STRING
        },
        categoria: {
            type: DataTypes.STRING,

        },
        prov: {
            type: DataTypes.STRING,

        }

    })
}