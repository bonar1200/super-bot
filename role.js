const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = 'r!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");

client.on('message', message => {
    let args = message.content.split(" ").slice(1);

if (message.content.startsWith("!createrole")) {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**انت لا تملك صلاحية '[Manage Roles]'**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**البوت لايملك صلاحية '[Manage Roles]'**").then(m => m.delete(5000));
let MRole = message.content.split(" ")[1];
if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(m => {m.delete(5000)});
message.guild.createRole({
  name: MRole
})
message.reply('*** تم ✅  ***').then(m => {m.delete(10000)});
  
          const embed = new Discord.RichEmbed()

    .addField('الأمر','!creatrole')
    .addField('تم عمل رتبة بأسم:', MRole)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed)
    
  
}
  
if (message.content.startsWith("!deleterole")) {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**انت لا تمتلك صلاحية '[Manage Roles]**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**البوت لايملك صلاحية '[Manage Roles]**").then(m => m.delete(5000));
let MRole = message.content.split(" ")[1];
if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(m => {m.delete(5000)});
	let role = message.guild.roles.find('name', args.join(' '));
	role.delete()
	
message.reply('*** تم ?  ***').then(m => {m.delete(10000)});
  
          const embed = new Discord.RichEmbed()

    .addField('الأمر','!deleterole')
    .addField('تم مسح الرتبة:', MRole)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed)
    

  }
  

  
});
client.on('message', async message => {
    let args = message.content.split(" ").slice(1);

if(message.content.startsWith('!giverole')) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك الصلاحية [Manage roles]**");
  const rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**منشن شخص**");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("**ضع اسم الرتبة**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("**لم استطيع ايجاد الرتبة**");

  if(rMember.roles.has(gRole.id)) return message.reply("**هو بالفعل لديه الرتبة**");
  await(rMember.addRole(gRole.id));

    message.channel.send(`**مبروك <@${rMember.id}>, لقد حصلت على رتبة ${gRole.name}**`)
}
  
            const embed7 = new Discord.RichEmbed()

    .addField('الأمر','!giverole')
    .addField('تم اعطاء رتبة للشخص:', rMember)
    .addField('الرتبة:', role)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed7)
  
if(message.content.startsWith('!removerole')) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك الصلاحية [Manage roles]**");
  const rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**منشن شخص**");
  let role = args.join(" ").slice(11);
  if(!role) return message.reply("**ضع اسم الرتبة**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("**لم استطيع ايجاد الرتبة**");

  if(!rMember.roles.has(gRole.id)) return message.reply("**هو ليس لديه الرتبة**");
  await(rMember.removeRole(gRole.id));

    message.channel.send(`**للأسف <@${rMember.id}>, تم ازالة منك الرتبة ${gRole.name}**`)
  
            const embed = new Discord.RichEmbed()

    .addField('الأمر','!removerole')
    .addField('تم ازالة رتبة من الشخص:', rMember)
    .addField('الرتبة:', role)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed)
}
  });

client.login(process.env.RECROWND_ADMIN);
