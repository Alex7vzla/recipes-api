const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Recipes = require('./recipes.models');
const Users = require('./users.models');

const UsersRecipes = db.define('users_recipes',{
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
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
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
});

module.exports = UsersRecipes;