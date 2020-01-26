module.exports = {
  name: "weapon",
  description: "Will provide weapon details",
  async execute(message, args, { Weapon }) {
    const reformedArgs = args.join(" ").split(",");
    switch (reformedArgs[0]) {
      case "get": {
        const response = await getWeapon(Weapon, reformedArgs[1]);
        message.channel.send(response);
        break;
      }
      case "add": {
        const response = await insertWeapon(Weapon, {});
        response.insert
          ? message.channel.send("Success Add")
          : message.channel.send("Failed Add");
      }
    }
  }
};

async function getWeapon(model, name) {
  const sanitizedName = name.trim();
  const weapon = await model.findOne({ where: { name: sanitizedName } });
  return JSON.stringify(weapon.dataValues);
}

async function insertWeapon(
  model,
  { name, damage, skill_rating, range, ammo, cost, ammo_cost }
) {
  try {
    await model.upsert({
      name,
      damage,
      skill_rating,
      range,
      ammo,
      cost,
      ammo_cost
    });
    return { insert: true };
  } catch (err) {
    console.log(err);
    return { insert: false, err };
  }
}
