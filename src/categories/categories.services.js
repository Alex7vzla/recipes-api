const categoriesControllers = require('./categories.controllers');

const getAllCategories = (req, res) => {
    categoriesControllers.getAllCategories()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
};

const getCategorieById = (req, res) => {
    const id = req.params.id
    categoriesControllers.getCategorieById()
        .then(data => {
            if(data){ 
                res.status(200).json(data)
            }else {
                res.status(400).json({message: `ID: ${id} do not exits`})
            }   
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}; 

const postCategory = (req, res) => {
    const {name} = req.body;
    if(name){
        categoriesControllers.createCategorie()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({message:err.message})
            })
    }else{
        res.status(400).json({
            message: 'Invalid data',
            fields: {
                name: 's'
            }
        })
    }
};