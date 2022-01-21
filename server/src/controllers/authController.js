const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const generateToken = require("../Auth/auth");

const auth = {
  index: function (req, res) {
    return res.status(200).json({
      message: "welcome to access page",
    });
  },
  login: async function (req, res) {
    try {
      await db.User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((user) => {
        const { password } = req.body;
        if (!user) {
          res.status(404).json({
            message: "No hay usuario registrado con el mail ingresado",
          });
        } else {
          if (bcryptjs.compareSync(password, user.password)) {
            req.session.userLogged = user;
            res.status(201).json({
              id: user.id,
              name: user.name,
              email: user.email,
              token: generateToken(user.id, user.name),
            });
          } else {
            res.status(401).json({
              message: "La contraseña es incorrecta",
            });
          }
        }
      });
    } catch (error) {
      return res.status(500).json({ message: "Se ha producido un error" });
    }
  },
  register: async function (req, res) {
    const { name, lastName, email, password } = req.body;
    await db.User.findOne({
      where: { email: email },
    }).then((userExist) => {
      if (userExist) {
        return res
          .status(500)
          .json({ message: "Ya existe un usuario con el mail ingresado" });
      } else {
        try {
          let password = bcryptjs.hashSync(req.body.password, 10);
          db.User.create({
            name: name,
            email: email,
            password: password,
          }).then((user) => {
            res.status(200).json({
              id: user.id,
              name: user.name,
              mail: user.mail,
              token: generateToken(user.id),
              message: "El usuario se ha creado correctamente",
            });
          });
        } catch (error) {
          return res.status(500).json({
            message: "Se ha producido un error",
          });
        }
      }
    });
  },
  revalidateToken: (req, res, next) => {
    const { id, name } = req;
    const token = generateToken(id, name);

    res.json({
      ok: true,
      id,
      name,
      token,
    });
  },
};
module.exports = auth;
