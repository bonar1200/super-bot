const myDiscriminator = ["6666", "2121", "0000", "0001", "0002", "6969", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "2169", "6921", "0021", "0690", "0210", "2100", "0069"];
const bot = new(require("discord.js")).Client({fetchAllMembers: true});

const password = "xixi6060";
const token = "NDc5ODE5NzEyNDk5Mjg2MDM2.Dleyow.LkuRUj90-EqXxyQUfv-XzBD1mes";

bot.login(token);

function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    bot.user.setUsername(us, password).then((u) => {
      setTimeout(changeDiscriminator, 8640 * 10000);
    }).catch(err)
  } catch(e) {
    setTimeout(changeDiscriminator, 30 * 1e3);
  }
}

bot.once("ready", () => {
  changeDiscriminator();
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`) 
      process.exit();
  }
});
