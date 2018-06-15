const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = '!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");

client.on('message', message => {

if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
              if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**لاستخدم الأمر اكتب : !move @user**")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id
var embed1 = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`**لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: **`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed1))
} else {
message.channel.send("**لا تستطيع سحب "+ message.mentions.members.first() +" يجب ان يكون هذه العضو في روم صوتي**")
}
} else {
 message.channel.send("**يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك**")
}
} else {
message.react("❌")
 }
          const embed = new Discord.RichEmbed()

    .addField('الأمر','!move')
    .addField('تم نقل:', `${men.username}#${men.discriminator} (${men.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
        message.guild.channels.find('name', 'log1').send(embed)
    
}
});
  
client.login(process.env.RECROWND_ADMIN);
