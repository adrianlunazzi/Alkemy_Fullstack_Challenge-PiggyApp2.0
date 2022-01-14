"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("OperationTypes", [
      {
        name: "Ingresos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gastos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("OperationTypes", null, {});
  },
};
