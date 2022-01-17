const db = require("../database/models");

const category = {
  index: async function (req, res) {
    try {
      await db.Category.findAll({
        include: ["operationTypes"],
      }).then(function (categories) {
        return res.status(200).json(categories);
      });
    } catch (error) {
      return res.send(error);
    }
  },
  create: async function (req, res) {
    try {
      const { name, operationTypeId, userId } = req.body;
      await db.Category.create({
        operationTypeId: operationTypeId,
        name: name,
        userId: userId,
      }).then(function (category) {
        return res.json((data = category));
      });
    } catch (error) {
      return res.send(error);
    }
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name, operationTypeId } = req.body;
    try {
      await db.Category.update(
        {
          name,
          operationTypeId,
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
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      await db.Category.findByPk(id).then((categories) => {
        return res.status(200).json({
          data: categories,
          mge: `Category N° ${categories.id}, detail`,
        });
      });
    } catch (error) {
      return res.send(error);
    }
  },
};
module.exports = category;
