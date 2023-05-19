'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: DataTypes.UUID,
    deleted: DataTypes.BOOLEAN,
    deleted_at: DataTypes.DATE,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zip: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    street: DataTypes.STRING,
    streetNumber: DataTypes.STRING,
    streetComplement: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};