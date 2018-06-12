const Discord = require("discord.js");

const bot = new Discord.Client();

client.on('message', message => {

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

});
client.login(process.env.BOT_QURAN);
