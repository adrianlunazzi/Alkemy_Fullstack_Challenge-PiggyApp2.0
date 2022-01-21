const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(401).json({
      ok: false,
      message: "No hay token",
    });
  }

  try {
    const { id, name } = jwt.verify(token, process.env.JWT_SECRET);
    req.id = id;
    req.name = name;
  } catch (error) {
    res.status(401).json({
      ok: false,
      message: "Token invalido",
    });
  }

  next();
};

module.exports = { validateJWT };
