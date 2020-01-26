const Sequelize = require("sequelize");

const sequelize = new Sequelize("unhallowed", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "unhallowed.sqlite"
});

// TODO: Look into making this dynamic;
const Character = sequelize.import("model/character");
const Weapons = sequelize.import("model/weapon");
const Armour = sequelize.import("model/armour");
const CharacterWeapon = sequelize.import("model/characterWeapon");
const CharacterArmour = sequelize.import("model/characterArmour");

// TODO: To be moved in a sepeate weapon config, that will be used when needed
const weapons = [
  {
    name: "Derringer 4",
    damage: 5,
    skill_rating: 3,
    range: "50'",
    ammo: 1,
    cost: 18,
    ammo_cost: 8
  },
  {
    name: "Combat Knife",
    damage: 3,
    skill_rating: 3,
    range: "Melee"
  }
];

// Inserting data on creation
const databaseCreation = () =>
  sequelize.sync({ force: true }).then(async () => {
    const weaponArray = weapons.map(
      ({ name, damage, skill_rating, range, ammo, cost, ammo_cost }) => {
        return Weapons.upsert({
          name,
          damage,
          skill_rating,
          range,
          ammo,
          cost,
          ammo_cost
        });
      }
    );
    await Promise.all(weaponArray);

    sequelize.close();
  });

module.exports = {
  databaseCreation,
  Character,
  Weapons,
  Armour,
  CharacterWeapon,
  CharacterArmour
};
