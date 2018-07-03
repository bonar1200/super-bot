const Discord = require("discord.js");
const client = new Discord.Client();



client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send('** تنورنا في سيرفرنا يا عسل 💖 \n https://discord.gg/P9VVpJt**')

}).catch(console.error)
})



client.login(process.env.AD_1);
