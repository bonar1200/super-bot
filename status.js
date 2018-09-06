const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
    client.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client.login(process.env.PLAY1);

const client2 = new Discord.Client();

client2.on('ready',  () => {
    client2.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client2.login(process.env.PLAY2);

const client3 = new Discord.Client();

client3.on('ready',  () => {
    client3.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client3.login(process.env.PLAY3);

const client4 = new Discord.Client();

client4.on('ready',  () => {
    client4.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client4.login(process.env.PLAY4);

const client5 = new Discord.Client();

client5.on('ready',  () => {
    client5.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client5.login(process.env.PLAY5);

const client6 = new Discord.Client();

client6.on('ready',  () => {
    client6.user.setGame("Free Time Music", "https://www.twitch.tv/FreeTime");
});

client6.login(process.env.PLAY6);

const client7 = new Discord.Client();

client7.on('ready',  () => {
    client7.user.setGame("Fplay | 🎵", "https://www.twitch.tv/FreeTime");
});

client7.login(process.env.PLAY7);

const client8 = new Discord.Client();

client8.on('ready',  () => {
    client8.user.setGame("Lplay | 🎵", "https://www.twitch.tv/FreeTime");
});

client8.login(process.env.PLAY8);

const client9 = new Discord.Client();

client9.on('ready',  () => {
    client9.user.setGame("Type Aplay", "https://www.twitch.tv/FreeTime");
});

client9.login(process.env.PLAY9);


