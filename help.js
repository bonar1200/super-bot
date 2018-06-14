const { Client, Util } = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = '!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");
const Discord = require("discord.js");


const client = new Client({ disableEveryone: true });


const youtube = new YouTube('AIzaSyCv1YSWJqWbBIvAd2fFOzBl72uwDuNizhg');

client.on("ready", () => {
  console.log("I am ready!");
  var game = {name: "with code"};
  client.user.setGame('Recrownd | !help admin');
  client.user.setStatus('dnd');

});

const queue = new Map();
client.on('message', message => {
if (message.content === prefix + 'help admin') {
        if (!message.member.hasPermission('MOVE_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR') || !message.member.hasPermission('MANAGE_ROLES') || !message.member.hasPermission('MANAGE_MESSAGES') || !message.member.hasPermission('MANAGE_CHANNELS') || !message.member.hasPermission('MANAGE_NICKNAMES') || !message.member.hasPermission('BAN_MEMBERS') || !message.member.hasPermission('KICK_MEMBERS') || !message.member.hasPermission('DEAFEN_MEMBERS') || !message.member.hasPermission('MUTE_MEMBERS') || !message.member.hasPermission('MANAGE_EMOJIS')) {
            return message.reply("** عفوًا, لايمكنك أستخدام هذا البوت لإنك لست من إدارة السيرفر **");
        }
message.reply(`**سوف يتم ارسال قائمة المساعدة في رسالة خاصة **`); {
  
              var embed  = new Discord.RichEmbed()
                .addField("**!giverole**" ,"**الاستخدام:** ``لاعطاء شحص رتبة``")
                .addField("**!removerole**", "**الاستخدام :** ``مسح رتبة من شخص معين``")
                .addField("**!deleterole**" ,"**الاستخدام:** ``مسح رتبة من السيرفر ``")
                .addField("**!rolebc**" ,"**الاستخدام:** ``برودكاست لأشخاص لهم رتبة معينة``")
                .addField("**!bc**" ,"**الاستخدام:** ``برودكاست لجميع السيرفر``")
                .addField("**!deletechannel**" ,"**الاستخدام:** ``مسح روم من السيرفر``")
                .addField("**!addtext**" ,"**الاستخدام:** ``اضافة روم كتابي``")
                .addField("**!addvoice**" ,"**الأستخدام:** ``اضافة روم صوتي``")
                .addField("**قفل الروم**" ,"**الاستخدام:** ``لقفل الروم وعدم الكتابة به``")
                .addField("**فتح الروم**" ,"**الاستخدام:** ``لفتح الروم مرة أخرى``")
                .addField("**تنظيف**" ,"**الاستخدام:** ``لمسح الرسائل``")
                .addField("**!createrole**" ,"**الاستخدام:** ``لعمل رتبة``  ")
                .addField("**!vb**" ,"**الاستخدام:** ``باند من الرومات الصوتية``")
                .addField("**!unvb**", "**الأستخدام:** ``فك الباند من الرومات الصوتية``")
                .addField("**!ban**", "**الاستخدام** ``لتبنيد شخص``")
                .addField("**!unban**", "**الاستخدام** ``لفك باند شخص``")
                .addField("**!kick**", "**الاستخدام** ``لطرد شخص``")
                .addField("**اسكت**", "**الأستخدام:** ``للميوت الكتابي``")
                .addField("**تكلم**", "**الاستخدام** ``لفك الميوت الكتابي``")
              .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
}
    }
});

client.login(process.env.RECROWND_ADMIN);
