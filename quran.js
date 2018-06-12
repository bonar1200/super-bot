const Discord = require("discord.js");
const client = new Discord.Client();const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = 'r!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");



client.on('message', message => {

if(message.content === "!قران")
  return message.reply("**أوامر بوت القرآن:\nقران1: القرآن الكريم كامل بوت الشيخ عبدالباسط عبدالصمد\nقران2: القرآن الكريم كامل بصوت الشيخ ماهر المعيقلي**")

client.on('message', message => {
  if (message.content.startsWith('قران1')) {
    let voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        let stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        let dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());

      });
  }
  
  if (message.content.startsWith('قران2')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        let stream = ytdl("https://www.youtube.com/watch?v=wwMyn8a_puQ", { filter: 'audioonly' });
        let dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
    });
            }
});

});

client.login(process.env.BOT_QURAN);
