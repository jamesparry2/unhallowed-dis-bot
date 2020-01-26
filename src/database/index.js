const Sequelize = require("sequelize");

const sequelize = new Sequelize("unhallowed", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "unhallowed.sqlite"
});

const Character = sequelize.import("model/character");

// Inserting data on creation
sequelize.sync({ force: true }).then(async () => {
  await Character.upsert({ name: "One Point", test: "Hello There" });
  sequelize.close();
});

module.exports = { Character };
