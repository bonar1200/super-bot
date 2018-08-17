const myDiscriminator = ["6666", "2121", "0000", "0001", "0002", "6969", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "2169", "6921", "0021", "0690", "0210", "2100", "0069"];
const discord = require('discord.js');
const bot = new Discord.Client({fetchAllMembers: true});

const password = "xixi6060";
const token = "NDc5OTcwMTU3ODEzNTYzNDEz.DliJNQ.z05BJITEZfCrDK2IRA7a9WMLNIo";

bot.login(token);

const changeDiscriminator = async () => {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    bot.user.setUsername(us, password).then((u) => {
    })
  } catch(e) {
	  
  }
}
      setInterval(changeDiscriminator, 86400000);
const bot2 = new Discord.Client({fetchAllMembers: true});
const token2 = "NDgwMDU3MzU2ODA2MjU4Njk5.DliQVg.b8_4qt4YKSo7FDHvWODWdnCLrvI";

bot2.login(token2);

const changeDiscriminator = async () => {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    bot.user.setUsername(us, password).then((u) => {
    })
  } catch(e) {
	  
  }
}

