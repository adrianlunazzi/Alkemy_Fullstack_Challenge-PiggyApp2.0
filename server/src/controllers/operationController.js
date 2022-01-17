const db = require("../database/models");
const operation = {
  list: async function (req, res) {
    try {
      await db.Operation.findAll({
        include: ["categories", "operationTypes"],
      }).then(function (operations) {
        const reverseOperations = operations.reverse();
        return res.status(200).json((data = reverseOperations));
      });
    } catch (error) {
      return res.send(error);
    }
  },
  create: async function (req, res) {
    const { name, amount, date, userId, categoryId, operationTypeId } =
      req.body;

    try {
      await db.Operation.create({
        name,
        amount,
        date,
        userId: userId,
        categoryId,
        operationTypeId,
      }).then(function (operations) {
        return res.status(200).json({
          id: operations.id,
          name: operations.name,
          amount: operations.amount,
          date: operations.date,
          userId: operations.userId,
          categoryId: operations.categoryId,
          operationType: operations.operationTypeId,
        });
      });
    } catch (error) {
      return res.send(error);
    }
  },
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      await db.Operation.findByPk(id).then((operations) => {
        return res.status(200).json({
          data: operations,
          mge: "Operation Created Ok",
        });
      });
    } catch (error) {
      return res.send(error);
    }
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name, amount, categoryId } = req.body;
    try {
      await db.Operation.update(
        {
          name,
          amount,
          categoryId,
        },
        {
          where: {
            id,
          },
        }
      ).then(function (operations) {
        return res.status(200).json({
          message: "Operation Updated ok",
        });
      });
    } catch (error) {
      return res.send(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await db.Operation.destroy({
        where: {
          id,
        },
      }).then(function (operations) {
        return res.status(200).json({
          message: "Operation Deleted Ok",
        });
      });
    } catch (error) {
      return res.send(error);
    }
  },
};
module.exports = operation;
