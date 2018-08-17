const myDiscriminator = ["6666", "2121", "0000", "0001", "0002", "6969", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "2169", "6921", "0021", "0690", "0210", "2100", "0069"];
const bot = new(require("discord.js")).Client({fetchAllMembers: true});

const password = "xixi6060";
const token = "NDc5NzE4NDczNzMyNDU2NDcz.DleXaA.C2u3j2X65xSEj0jhsErmhMCNRmQ";

bot.login(token);

function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    console.log(Date.now(), "Username Loaded: " + us);
    bot.user.setUsername(us, password)
}

bot.once("ready", () => {
  console.log(Date.now(), "Started with " + bot.users.size + " users.");
  changeDiscriminator();
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`) 
      process.exit();
  }
});
