const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Recipes = require('./recipes.models');

const Instructions = db.define('instructions', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    recipesId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipes_id',
        references: {
            key: 'id',
            model: Recipes
        }
    },
    steps: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Instructions;