"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    static associate(models) {
      Operation.belongsTo(models.User, {
        foreignKey: "userId",
        as: "users",
      });
      Operation.belongsTo(models.OperationType, {
        foreignKey: "operationTypeId",
        as: "operationTypes",
      });
      Operation.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "categories",
      });
    }
  }
  Operation.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      date: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      operationTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Operation",
    }
  );
  return Operation;
};
