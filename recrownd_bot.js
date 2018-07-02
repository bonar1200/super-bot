const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const ms = require('ms');
prefix = '!';

client.on("ready", () => {
  console.log("I am ready!");
  var game = {name: "with code"};
  client.user.setGame('Recrownd | !help');

});

bot.on('message', message => {
  
  if (message.author.bot) return;

      const args = message.content.split(" ").slice(1);
          if (message.content.startsWith("!id")) {
            if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**')
    let men = message.mentions.users.first();
       var heg;
       if(men) {
           heg = men
       } else {
           heg = message.author
       }
        var h;
       if(men) {
           h = men
       } else {
           h = message.member
       }
              moment.locale('ar-TN');
     var embed = new  Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(heg.avatarURL)
   .setAuthor(` ${heg.username} `, heg.avatarURL)
   .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
   message.channel.send(embed)
}   
  
if (message.author.bot) return;
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
           x5bzm = mentionned;
      } else {
           x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }


              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content.startsWith("!server avatar")){ 
            if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**')
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  
if (message.content === prefix + 'help') {

message.reply(`**سوف يتم ارسال قائمة المساعدة في رسالة خاصة إذا لم يصلك تأكد من قبولك للرسائل الخاصة من قروب ركروند **`); {
  
              var embed5  = new Discord.RichEmbed()
                .addField("**!id**" ,"**الاستخدام:** ``لرؤية هويتك``")
                .addField("**!server**", "**الاستخدام :** ``لتتعرف على معلومات سيرفرنا``")
                .addField("**!avatar**" ,"**الاستخدام:** ``لظهور صورة البروفايل ``")
                .addField("**!tempc**" ,"**الاستخدام:** ``لإنشاء روم مؤقت صوتي``")
                .addField("**رابط**" ,"**الاستخدام:** ``لإنشاء دعوة للسيرفر``")
              .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed5);
}
    }  

if(message.content == '!server') {
            if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**')
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
      .setTitle(`Showing Details Of  **${message.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${message.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${message.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${message.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${message.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${message.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${message.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${message.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${message.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',message.guild.createdAt.toLocaleString())
      message.channel.send(embed);
    }
  
     if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
            if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**')
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 7200,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم إرسال الرابط برسالة خاصة إذا لم يصلك تأكد من قبولك للرسائل الخاصة من قروب ركروند ")
           .setAuthor(bot.user.username, bot.user.avatarURL)
                 .setAuthor(bot.user.username, bot.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : ساعتين  عدد استخدامات الرابط : 5 ")
      message.author.sendEmbed(Embed11)
    }
if(message.content.startsWith(prefix + 'tempc')) {
  let modlog = bot.channels.find('name', 'log1');
            if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**')
      var nam = args.join(' ');
     if(!message.member.roles.find('name', 'pn')) return    message.channel.send("**ليس لديك رتبة pn**").then(m => m.delete(6000))
     if (!nam) return message.reply(`** ${prefix}tempchannel <Channel Name>**`).then(m => m.delete(10000))
     message.guild.createChannel(nam, 'voice').then(c => {
            setTimeout(() => {
                c.setParent('455588591754543115')
            }, 1000)
        })
     message.channel.send(`**✅ روم مؤقت : \`${nam}\`**`).then(c => setTimeout(() => c.edit(`<@${message.author.id}>   انتهى وقت الروم الصوتي`), 900000)) 
   
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأمر:', '!tempc')
    .addField('تم إنشاء روم مؤقت بواسطة:', `${message.author.username}#${message.author.discriminator}`);
  return bot.channels.get(modlog.id).sendEmbed(embed);
  
    }
  
if (message.content.startsWith('باك')) {
  return message.send('**Welcome To Recrownd Server**')
}
  if (message.content.startsWith('السلام عليكم')) {
  return message.send('**وعليكم السلام ورحمة الله وبركاته**')
}
  if (message.content.startsWith('سلام عليكم')) {
  return message.send('**وعليكم السلام ورحمة الله وبركاته**')
}
  
  if (message.content.startsWith('برب')) {
  return message.send('**Take Your Time 👋**')
}
  if (message.content === "!!") {
  return message.send('**Welcome To Our Server 🍃**')
}
  
  let modlog1 = bot.channels.find('name', 'chat');
  	      var interval1 = setInterval (function () {
  bot.channels.get(modlog1.id).send('**قولوا: 🍃/n- سبحان الله /n- وآلحمدالله /n- ولا إله إلا الله /n- ولآ حول ولا قوة إلا بالله /n- والله أكبر /n- واستغفرالله /nكونوا سببً في تذكير /n! الكثيرين بذكر الله**');
		  }, 7200000);

  
});
  bot.login(process.env.RECROWND_BOT);
