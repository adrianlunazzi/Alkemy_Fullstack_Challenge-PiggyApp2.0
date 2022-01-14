const user = {
  index: function (req, res) {
    return res.status(200).json({
      message: "user page",
    });
  },
};
module.exports = user;
