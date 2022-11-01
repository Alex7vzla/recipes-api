const Users = require('./users.models');
const UsersRecipes = require('./users_recipes.models');
const Categories = require('./categories.models');
const Instructions = require('./instructions.models');
const Types = require('./types.models');
const Recipes = require('./recipes.models');
const Ingredients = require('./ingredients.models');
const IngredientsRecipes = require('./ingredients_recipes.models');
const IngredientsUsers = require('./ingredients_users.models');

const initModels = () => {

    //Users 1:M 
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //Users 1:M UsersRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //Recipes 1:M UsersRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    //Users 1:M IngredientsUsers
    Users.hasMany(IngredientsUsers)
    IngredientsUsers.belongsTo(Users)

    //Ingredients 1:M IngredientsUsers
    Ingredients.hasMany(IngredientsUsers)
    IngredientsUsers.belongsTo(Ingredients)

    //Categories 1:M Recipes
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //Types 1:M Ingredients
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //Recipes 1:M IngredientsRecipes
    Recipes.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Recipes)

    //Ingredients 1:M IngredientsRecipes
    Ingredients.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Ingredients)

    //Recipes 1:M Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}


module.exports = initModels