const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	      var interval = setInterval (function () {
client.channels.get('451866194559893504').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
		  }, 120000);

});
client.login(process.env.BOT_TOKEN);
