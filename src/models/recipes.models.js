const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Categories = require('./categories.models');
const Users = require('./users.models');

const Recipes = db.define('recipes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(60),  // Maximo caracteres en el string
        allowNull: false,
        validate: {    //valida de varias maneras entre ellas el minimo
            min: 5
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'url_img'
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // Llave foranea [FK]
    // Reglas
    // Debe contener la tabla a la cual hacer referencia
    // Debe terminar el field con el subfijo id
    // El nombre debe iniciar en singular ej: user
    userId: {  
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users

        }
    },
    categorieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categorie_id',
        references: {
            key: 'id',
            model: Categories
        }
    },
    origin: {
        type: DataTypes.STRING,
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false
})

module.exports = Recipes;