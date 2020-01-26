const fs = require("fs");
const Discord = require("discord.js");
const { client_secret, prefix } = require("./utils/config");
const { DISCORD_MESSAGE_COMMAND } = require("./utils/constants");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const models = require("./database/actions");
const { databaseCreation } = require("./database");

const isValidCommand = command => client.commands.has(command);

const executeCommand = message => (command, args) => {
  try {
    client.commands.get(command).execute(message, args, models);
  } catch (err) {
    console.log(err);
    message.reply(`There was an error executing the command: ${command}`);
  }
};

const commandFiles = fs
  .readdirSync("./src/commands")
  .filter(file => file.endsWith(".js"));

commandFiles.forEach(file => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.once("ready", () => {
  databaseCreation();
});

client.on(DISCORD_MESSAGE_COMMAND, message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const commandExe = executeCommand(message);

  if (isValidCommand(commandName)) {
    commandExe(commandName, args);
  }
});

client.login(client_secret);
