const Sequelize = require("sequelize");

module.exports = sequelize => {
  return sequelize.define("character_weapons", {
    character_id: Sequelize.INTEGER,
    armour_id: Sequelize.INTEGER
  });
};
