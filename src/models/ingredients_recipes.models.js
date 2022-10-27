const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Ingredients = require('./ingredients.models');
const Recipes = require('./recipes.models');

const IngredientsRecipes = db.define('ingredients_recipes', {
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
    ingredientId: {
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

module.exports = IngredientsRecipes;