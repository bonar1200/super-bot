const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
client.user.setActivity("6$ = Million Credits ابيع كريدت",{type: 'PLAYING'})

});
client.login(process.env.BOT_TOKEN);

// //
