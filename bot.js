const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
client.user.setActivity("6$ = Million Credits ابيع كريدت",{type: 'PLAYING'})
	      var interval = setInterval (function () {
client.channels.get('451866194559893504').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
		  }, 120000);
  
  	      var interval1 = setInterval (function () {
  client.channels.get('451866194559893504').send('#daily');
  client.channels.get('451866194559893504').send('#rep <@483092158786568203>');  
		  }, 86800000);
	      var interval2 = setInterval (function () {
client.channels.get('451866194559893504').send('t!daily <@483092158786568203>');
client.channels.get('451866194559893504').send('t!rep <@483092158786568203>');
		  }, 61360000);
});
client.login(process.env.BOT_TOKEN);

// //
