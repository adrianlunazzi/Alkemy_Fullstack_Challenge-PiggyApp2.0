"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Operation, {
        as: "operations",
      });
      Category.belongsTo(models.OperationType, {
        foreignKey: "OperationTypeId",
        as: "operationTypes",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      operationTypeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
