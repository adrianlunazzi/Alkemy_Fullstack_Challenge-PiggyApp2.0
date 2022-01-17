const user = {
  index: async function (req, res) {
    try {
      await db.User.findAll().then(function (users) {
        return res.status(200).json(users);
      });
    } catch (error) {
      return res.send(error);
    }
  },
};
module.exports = user;
