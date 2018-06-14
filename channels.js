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
  
  
	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)
    let args = message.content.split(" ").slice(1);
  if (message.author.bot) return;

    if(command === "تنظيف") {
             if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt === "") {
        message.delete().then
    message.channel.send("ضع عدد الرسائل التي تريد مسحها ").then(m => m.delete(3000));
} else {
    message.delete().then
    message.delete().then
    message.channel.bulkDelete(textxt);
        message.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}





	











           if (message.content.startsWith("!addtext")) {
             if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')
                       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");
                   let args = message.content.split(" ").slice(8).join(" ")
                   if (!args[1] || args[1 == " "]) return message.reply("يرجى كتابه اسم الشات الكتابي")
               message.guild.createChannel(args, 'text');
           message.channel.sendMessage(`**✅ تـم إنـشـاء شـات كتابي بأسـم {  ${args}  }**`)

            const embed = new Discord.RichEmbed()

    .addField('الأمر','!addvoice')
    .addField('تم عمل روم كتابي بأسم:', args)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed)
             
             
           }



           if (message.content.startsWith("!addvoice")) {
             if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')
                       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**انت لا تمتلك صلاحيه `MANAGE_CHANNELS`**");
                  let args = message.content.split(" ").slice(9).join(" ")
                 if (!args[1] || args[1 == " "]) return message.reply("**يرجى كتابته اسم الروم الصوتي**")
               message.guild.createChannel(args, 'voice');
               message.channel.sendMessage(`**✅ تـم إنـشـاء روم صـوتي بـأسـم {  ${args}  }**`)

            const embed = new Discord.RichEmbed()

    .addField('الأمر','!addvoice')
    .addField('تم عمل روم صوتي بأسم:', args)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed)
             
    }
  
  
  
  
		   



                 if (message.content.startsWith('!deletechannel')) {
if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')
                     if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**انت لا تمتلك صلاحيه [`MANAGE_CHANNELS`]**");

                     let args = message.content.split(' ').slice(14);
                     let channel = message.client.channels.find('name', args.join(' '));
                     if (!channel) return message.reply('**لا يوجد روم صوتي او شات كتابي بهذا الأسم**')
                     channel.delete()
                     message.channel.sendMessage('**✅ تـم حـذف الـروم الـصوتـي او الـشـات الـكـتـابـي**')
                   
            const embed = new Discord.RichEmbed()

    .addField('الأمر','!deletechannel')
    .addField('تم حذف الروم:', args)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`);
        message.guild.channels.find('name', 'log1').send(embed)
                   
                 }
  
if (message.content === "قفل الروم") {
             if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**ليس لديك صلاحية '[Manage Messages]'**");

           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم ✅ **")
           })

  
}
  if (message.content === "فتح الروم") {
               if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**')

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**ليس لديك صلاحية '[Manage Messages]'**");
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**تم ✅ **")
           })
}
  
});


client.login(process.env.RECROWND_ADMIN);
