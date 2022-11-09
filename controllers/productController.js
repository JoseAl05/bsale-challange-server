const Product = require('../models').product;
const Sequelize = require('sequelize');

module.exports = {
   async getProducts(req,res){
        return await Product
            .findAll()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).send({error:error}))
    }
}