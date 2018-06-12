const { Client, Util } = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = 'r!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");
const Discord = require("discord.js");


const client = new Client({ disableEveryone: true });


const youtube = new YouTube('AIzaSyCv1YSWJqWbBIvAd2fFOzBl72uwDuNizhg');

const queue = new Map();

if(message.content === "!قران")
  return message.reply("**أوامر بوت القرآن:\nقران1: القرآن الكريم كامل بوت الشيخ عبدالباسط عبدالصمد\nقران2: القرآن الكريم كامل بصوت الشيخ ماهر المعيقلي**")

client.on('message', message => {
  if (message.content.startsWith('قران1')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());

      });
  }
  
  if (message.content.startsWith('قران2')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=wwMyn8a_puQ", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
    });
            }
});


client.login('NDU1NTkzNjE2MzY3Mjg4MzQw.Df-QNw.D3hadPBOR0zr6oaHCLlcEbQGCC8');
