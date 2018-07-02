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

client.on('message', async message => {
      const args = message.content.split(" ").slice(1);


	if (message.author.bot) return undefined;

  if (message.content.startsWith('اسكت')) {
               if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**لايوجد شخص للميوت\nEX: اسكت @شخص سب 30**");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**ما أقدر اسكته**");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("**من فضلك ضع مدة للميوت**");

  await(tomute.addRole(muterole.id));


    
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
      const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأمر:', 'اسكت')
    .addField('على:', `${tomute.username}#${tomute.discriminator} (${tomute.id})`)
    .addField('من:', `${message.author.username}#${message.author.discriminator}`)
    .addField('المدة:', `${ms(ms(mutetime))}`);
        message.guild.channels.find('name', 'log1').send(embed)  
    setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  
    
    
  }
  

  
  if (message.content.startsWith('تكلم')) {
                 if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log1');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (!modlog) return;
  if (!muteRole) return message.reply('**لا يوجد رتبة الميوت**').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**منشن شخص لفك الميوت**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأمر:', 'تكلم')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('**ليس لدي صلاحية [Manage Roles]**').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
  }
  if (!message.guild.member(user).roles.has(muteRole.id)) {
      message.channel.send('**الشخص ليس عليه ميوت**')
    };
  }
  });
  

 

client.login(process.env.RECROWND_ADMIN);
