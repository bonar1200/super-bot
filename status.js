const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
    client.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client.login(process.env.STATUS);
