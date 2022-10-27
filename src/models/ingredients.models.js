const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Types = require('./types.models');

const Ingredients = db.define('ingredients',{
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        references: {
            key: 'id',
            model: Types
        }
    },
    urlImg: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
});

module.exports = Ingredients;