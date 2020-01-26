const Sequelize = require("sequelize");

module.exports = sequelize => {
  return sequelize.define("character", {
    name: Sequelize.STRING,
    vitalitiy: Sequelize.TINYINT,
    coordination: Sequelize.TINYINT,
    wit: Sequelize.TINYINT,
    intellect: Sequelize.TINYINT,
    charm: Sequelize.TINYINT,
    will: Sequelize.TINYINT,
    total_experince_points: Sequelize.TINYINT
  });
};
