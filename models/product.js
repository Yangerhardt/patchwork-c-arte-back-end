'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    material: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};