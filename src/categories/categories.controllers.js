const Categories = require('../models/categories.models');

const getAllCategories = async () => {
    const data = await Categories.findAll();
    return data;
};

const getCategorieById = async (id) => {
    const data = await Categories.findOne({
        where: {
            id
        }
    })
    return data;
};

const createCategorie = async () => {
    const data = await Categories.create({
        title
    })
    return data;
};

const deleteCategorie = async (id) => {
    const data = await Categories.destroy({
        where: {
            id
        }
    })
    return data;
};

module.exports = {
    getAllCategories,
    getCategorieById,
    createCategorie,
    deleteCategorie
}