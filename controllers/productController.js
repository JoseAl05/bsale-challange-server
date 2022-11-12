const Product = require('../models').product;
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = {
   async getProducts(req,res){
        return await Product
            .findAll()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).send({error:error}))
    },

    async getProductsByCategory(req,res){
        return await Product
            .findAll({
                where:{
                    category:req.params.id
                }
            })
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).send({error:error}))
    },

    async getProductsBySearch(req,res){
        return await Product
            .findAll({
                where:{
                    [Op.or]:
                    [
                        {
                            name:{
                                [Op.substring]: `%${req.params.name}%`
                            }
                        },
                        {
                            name:{
                                [Op.startsWith]: `%${req.params.name}`
                            }
                        },
                        {
                            name:{
                                [Op.endsWith]: `${req.params.name}%`
                            }
                        }
                    ]
                }
            })
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).send({error:error}))
    }
}