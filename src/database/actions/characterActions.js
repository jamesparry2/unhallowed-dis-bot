const Sequelize = require("sequelize");

const sequelize = new Sequelize("unhallowed", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "unhallowed.sqlite"
});

const Character = sequelize.import("../model/character");

Character.prototype.getItems = function() {
  // These prototype can only be applied on the documents them selves
  return ["Nani"];
};

module.exports = { Character };
