const Discord = require("discord.js");
const prefix = '!';
const client = new Discord.Client();
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
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
  message.author.send(embed);
}
    }
});

client.login(process.env.BOT_QURAN);
