const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = 'r!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");

client.on('message', message => {
  
  if (message.content.startsWith('!vb')) {
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("** انت لا تمتلك خاصية '[Mover Members]'**");
let men = message.mentions.users.first()
let mas = message.author
if(!men) return message.reply('**منشن شخص **');
message.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
    

const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`          <@${men.id}>\nلقد تم منع من دخول الرومات الصوتيه \nبواسطة : <@${message.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
message.channel.sendEmbed(Embed11).then(m => {m.delete(10000)})
  
          const embed = new Discord.RichEmbed()

    .addField('الأمر','!vb')
    .addField('الباند الصوتي على:', `${men.username}#${men.discriminator} (${men.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
        message.guild.channels.find('name', 'log1').send(embed)
    
  }
  


  if (message.content.startsWith('!unvb')) {
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("**انت لا تمتلك خاصة '[Move Members]'**");
 let men = message.mentions.users.first()
 let mas = message.author
 if(!men) return message.reply('**منشن شخص **');
 message.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
      const embed9 = new Discord.RichEmbed()

    .addField('الأمر','!unvb')
    .addField('تم فك الباند الصوتي من:', `${men.username}#${men.discriminator} (${men.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
        message.guild.channels.find('name', 'log1').send(embed9)
    
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`          <@${men.id}>\nالان يمكنك الدخول الي الرومات الصوتيه\nبواسطة : <@${message.author.id}>`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
message.channel.send(Embed11).then(m => {m.delete(15000)})
  if (!modlog) return message.reply('I cannot find a mod-log channel');
    
    }
});

client.login(process.env.RECROWND_ADMIN);
