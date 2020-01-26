module.exports = {
  name: "character",
  description: "Currently adding Characters into the SQLITE Db!",
  async execute(message, args, { Character }) {
    const something = await Character.findOne({ where: { name: "One Point" } });
    message.channel.send(something.dataValues);
  }
};
