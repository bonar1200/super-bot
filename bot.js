const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	      var interval = setInterval (function () {
client.channels.get('451866194559893504').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
		  }, 120000);
  
  	      var interval1 = setInterval (function () {
  client.channels.get('451866194559893504').send('#daily');
  client.channels.get('451866194559893504').send('#rep <@448675703018487819>');  
		  }, 86800000);
	      var interval2 = setInterval (function () {
client.channels.get('451866194559893504').send('t!daily <@448675703018487819>');
client.channels.get('451866194559893504').send('t!rep <@448675703018487819>');
		  }, 61360000);
});
client.login(process.env.BOT_TOKEN);
