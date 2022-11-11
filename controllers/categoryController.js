const Category = require('../models').category;
const Sequelize = require('sequelize');

module.exports = {
   async getCategories(req,res){
        return await Category
            .findAll()
            .then(categories => res.status(200).json(categories))
            .catch(error => res.status(500).send({error:error}))
    }
}