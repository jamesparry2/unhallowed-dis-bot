const Sequelize = require("sequelize");

module.exports = sequelize => {
  return sequelize.define("character", {
    name: Sequelize.STRING,
    test: Sequelize.STRING
  });
};
