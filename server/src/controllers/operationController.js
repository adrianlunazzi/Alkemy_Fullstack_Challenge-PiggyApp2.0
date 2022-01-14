const operation = {
  index: function (req, res) {
    return res.status(200).json({
      message: "operation page",
    });
  },
};
module.exports = operation;
