const Sequelize = require("sequelize");

module.exports = sequelize => {
  return sequelize.define("armour", {
    name: Sequelize.STRING,
    type: Sequelize.STRING
  });
};
