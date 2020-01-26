const Sequelize = require("sequelize");

const sequelize = new Sequelize("unhallowed", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "unhallowed.sqlite"
});

const Weapon = sequelize.import("../model/weapon");

module.exports = { Weapon };
