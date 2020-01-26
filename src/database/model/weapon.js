const Sequelize = require("sequelize");

module.exports = sequelize => {
  return sequelize.define("weapon", {
    name: Sequelize.STRING,
    damage: Sequelize.BIGINT,
    skill_rating: Sequelize.BIGINT,
    range: Sequelize.STRING,
    ammo: Sequelize.TINYINT,
    cost: Sequelize.TINYINT,
    ammo_cost: Sequelize.TINYINT
  });
};
