const router = require('express').Router();
const passport = require('passport');
const adminValidate = require('../middlewares/role.middleware');
const categoriesServices = require('./categories.services');
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.postCategory)

router.route('/:id')
    .get(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        categoriesServices.getCategorieById
        )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        categoriesServices.deleteCategory
        )

module.exports = router;