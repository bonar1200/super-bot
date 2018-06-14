const { Client, Util } = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = '!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");
const Discord = require("discord.js");


const client = new Client({ disableEveryone: true });


const youtube = new YouTube('AIzaSyCv1YSWJqWbBIvAd2fFOzBl72uwDuNizhg');

const queue = new Map();

client.on('message', message => {
  if (message.content.startsWith('!ban')) {
               if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log1');
                       if (!message.member.hasPermission('BAN_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply("** ليس لديك صلاحية '[Ban Members]' **");
        }  if (!modlog) return;
  if (message.mentions.users.size < 1) return message.reply('**منشن شخص للطرد**').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('**لا يمكنن طرد هذا الشخص**');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأمر:', '!ban')
    .addField('تم تبنيد:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed);
  }
  
  if (message.content.startsWith('!kick')) {
               if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log1');
                       if (!message.member.hasPermission('KICK_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply("** ليس لديك صلاحية '[Ban Members]' **");
        }  if (!modlog) return;
  if (message.mentions.users.size < 1) return message.reply('**منشن شخص للطرد**').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('**لا يمكنني طرد هذا الشخص**');
  message.guild.member(user).kick();


  const embed1 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأمر:', '!kick')
    .addField('تم طرد:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed1);
  }
  
  if (message.content.startsWith('!unban')) {
               if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

  let user = args[0];
  let modlog = client.channels.find('name', 'log1');
                       if (!message.member.hasPermission('BAN_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply("** ليس لديك صلاحية '[Ban Members]' **");
        }  if (!modlog) return;
  if (!modlog) return;
  if (!user) return message.reply('**اكتب اسم الشخص لفك الباند**').catch(console.error);
  message.guild.unban(user);
    
  const embed1 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأمر:', '!unban')
    .addField('تم الفك عن:', user)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed1);
    
}
});
client.login(process.env.RECROWND_ADMIN);
