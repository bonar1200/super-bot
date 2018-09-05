const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  bot.channels.get("486649501612769291").sendMessage(" :star: **__Welcome To Free Time Server __** :star: ")
  });
  
bot.login(process.env.WELCOME);

const bot2 = new Discord.Client();

bot2.on("guildMemberAdd", member => {
  let guild = member.guild;
  bot2.channels.get("486649501612769291").sendMessage(" :full_moon_with_face: **Welcome To Free Time Server** :full_moon_with_face: ")
  });
  
bot2.login(process.env.WELCOME2);

const bot3 = new Discord.Client();

bot3.on("guildMemberAdd", member => {
  let guild = member.guild;
  bot3.channels.get("486649501612769291").sendMessage("`Welcome To Free Time Server` :black_heart: ")
    bot3.channels.get("486649501612769291").sendMessage("ولكم")
  });
  bot3.login(process.env.WELCOME3);
