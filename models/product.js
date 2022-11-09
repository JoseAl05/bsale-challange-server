'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {

    static associate(models) {

    }
  };
  product.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
    },
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER,
    category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    freezeTableName:true,
    timestamps:false
  });
  return product;
};