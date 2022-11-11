'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {

    static associate(models) {

    }
  };
  category.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
    freezeTableName:true,
    timestamps:false,
  });
  return category;
};