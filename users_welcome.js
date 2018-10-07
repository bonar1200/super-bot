

const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
  var game = {name: "with code"};
  client.user.setGame('Welcome To California Shop ..');

});
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  bot.channels.get("354687515556315137").sendMessage("**Welcome To California Shop ..**")
  });
client.login(process.env.NEW);
