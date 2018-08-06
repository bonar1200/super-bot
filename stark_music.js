const { Client, Util } = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = 'S';
const YouTube = require('simple-youtube-api');
const ms = require("ms");
const Discord = require("discord.js");
var opus = require('opusscript');

//

const client = new Client({ disableEveryone: true });



const youtube = new YouTube('AIzaSyCv1YSWJqWbBIvAd2fFOzBl72uwDuNizhg');

const queue = new Map();

client.on("ready", () => {
  console.log("I am ready!");
  var game = {name: "with code"};
  client.user.setGame('Stark | Splay');
  client.user.setStatus('online');

});
  
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'play') {
             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('**من فضلك الدخول إلى روم صوتي لتشغيل الإغاني**');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`** القائمة: **${playlist.title}** تم إضافتها**`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;

const embed = new Discord.RichEmbed()
  .setAuthor("Stark Music", "http://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_1923946100.png")

  .setColor('RANDOM')
  .setDescription(`اختر رقم المقطع : \n${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)



  msg.channel.send({embed})  .then(msg => {
    msg.delete(15000)
  });
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 6, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('**لا يوجد رقم كُتب. الإختيار انتهى**');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(' I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (!msg.member.voiceChannel) return msg.channel.send('**من فضلك الدخول الى روم صوتي**');
		if (!serverQueue) return msg.channel.send('**لايوجد شئ حاليًا للتخطيه**');
		serverQueue.connection.dispatcher.end('**تم تخطي الأغنية**');
		return undefined;
	} else if (command === 'stop') {
             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('**لايوجد شئ حاليًا لتوقفه**');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('**تم الإيقاف**');
		return undefined;
	} else if (command === 'vol') {
             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (!msg.member.voiceChannel) return msg.channel.send('**من فضلك الدخول إلى روم صوتي**');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`**مستوى الصوت الحالي: __${serverQueue.volume}__**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`**تم تغير مستوى الصوت إلى: __${args[1]}__**`);
	} else if (command === 'np') {
		             if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')
		if (!serverQueue) return msg.channel.send('**لايوجد إغاني**');
		return msg.channel.send(` الأن: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (!serverQueue) return msg.channel.send('**لايوجد إغاني**');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
		
	} else if (command === 'np') {
             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (!serverQueue) return msg.channel.send('**لايوجد إغاني**');
		return msg.channel.send(`
**🎶 Now playing:** ${serverQueue.songs[0].title}
		`);
		
	} else if (command === 'pause') {
		             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('** تم وقوف الإغنية**');
		}
		return msg.channel.send('**لايوجد إغاني**');
	} else if (command === 'resume') {
		             if(!msg.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('** تم إستثناف الإغنية**');
		}
		return msg.channel.send('**لايوجد أغاني**');
	}

	return undefined;

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **__${song.title}__ تم أضافتها**`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('**الاغنية انتهت**');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`** تم تشغيل: __${song.title}__**`);
}
});

client.login(process.env.STARK_MUSIC);
