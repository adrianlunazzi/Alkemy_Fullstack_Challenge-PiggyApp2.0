"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OperationType extends Model {
    static associate(models) {
      OperationType.hasMany(models.Category, {
        as: "categories",
      });
      OperationType.hasMany(models.Operation, {
        as: "operations",
      });
    }
  }
  OperationType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OperationType",
    }
  );
  return OperationType;
};
