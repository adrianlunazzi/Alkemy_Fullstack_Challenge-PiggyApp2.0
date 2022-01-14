const category = {
  index: function (req, res) {
    return res.status(200).json({
      message: "category page",
    });
  },
};
module.exports = category;
