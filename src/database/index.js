const Sequelize = require("sequelize");

const sequelize = new Sequelize("unhallowed", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "unhallowed.sqlite"
});

const Character = sequelize.import("model/character");
const Weapons = sequelize.import("model/weapon");
const Armour = sequelize.import("model/armour");

// Inserting data on creation
const databaseCreation = () =>
  sequelize.sync({ force: true }).then(async () => {
    await Character.upsert({ name: "One Point", test: "Hello There" });
    sequelize.close();
  });

module.exports = { databaseCreation, Character, Weapons, Armour };
