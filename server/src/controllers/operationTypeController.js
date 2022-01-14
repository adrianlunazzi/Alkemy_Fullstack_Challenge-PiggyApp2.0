const operationType = {
  index: function (req, res) {
    return res.status(200).json({
      message: "opearation Type page",
    });
  },
};
module.exports = operationType;
