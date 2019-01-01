const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {

          var interval = setInterval (function () {
client.channels.get('529636546010152981').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
          }, 120000);
  
          var interval1 = setInterval (function () {
  client.channels.get('529636546010152981').send('#daily');
  client.channels.get('529636546010152981').send('#rep <@215251553538408458>');  
          }, 86800000);
  
          var interval2 = setInterval (function () {
client.channels.get('529636546010152981').send('t!daily <@215251553538408458>');
client.channels.get('529636546010152981').send('t!rep <@215251553538408458>');
          }, 61360000);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(`**ممكن أخطفك لحضني ياقلبي ؟\nتعال نسوي فعاليات ومسابقات على ملايين الكردت والنترو والبي بال** :heart: \n**https://discord.gg/3AWMGEA**\n\n <@${member.id}>`)

}).catch(console.error)
})



client.login(process.env.TJME3_13);
