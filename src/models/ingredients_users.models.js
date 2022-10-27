const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Ingredients = require('./ingredients.models');
const Users = require('./users.models');

const IngredientsUsers = db.define('ingredients_users', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false.valueOf,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    ingredientsId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredient_id',
        references: {
            key: 'id',
            model: Ingredients
        }
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = IngredientsUsers;