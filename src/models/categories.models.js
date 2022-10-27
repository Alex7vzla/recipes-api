const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categorie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    //Evita que se cree el create date and update date
    timestamps: false
});

module.exports = Categories;