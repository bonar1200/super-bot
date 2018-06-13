const Discord = require("discord.js");

const client = new Discord.Client();
const ytdl = require('ytdl-core');


client.on('message', message => {

if(message.content === "!قران")
  return message.reply("**أوامر بوت القرآن:\nقران1: القرآن الكريم كامل بوت الشيخ عبدالباسط عبدالصمد\nقران2: القرآن الكريم كامل بصوت الشيخ ماهر المعيقلي**")

  if (message.content.startsWith('قران1')) {
        message.react('🔊')}  return;
    const stram0ptions = { seek: 0, volume: 100};  
    const broadcast = 
clien.createVoiceBroadcast();



message.gulid.member(message.author).voiceChannel.join()
       .then(connection => {
           const stream = ytdl('https://www.youtube.com/watch?v=Ktync4j_nmA', { filter : 'audioonly'});
           broadcast.playstream(stream);
           const dispatcher = connection.playBroadcast(broadcast);
 }).catch(console.error);
  
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
