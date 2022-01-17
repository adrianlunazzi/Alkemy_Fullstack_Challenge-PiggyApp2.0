const db = require("../database/models");
const operationType = {
  index: async function (req, res) {
    try {
      await db.OperationType.findAll().then(function (types) {
        return res.status(200).json(types);
      });
    } catch (error) {
      return res.send(error);
    }
  },
};
module.exports = operationType;
