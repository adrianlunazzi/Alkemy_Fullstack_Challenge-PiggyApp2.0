const auth = {
  index: function (req, res) {
    return res.status(200).json({
      message: "auth page",
    });
  },
};
module.exports = auth;
