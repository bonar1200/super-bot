const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: false });
bot.on(`ready`, () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus("online")
  });
  bot.on("message", async message => {

  let prefix = `c^`
  let messageArray = message.content.split(" ");
  let msg = message;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "help")){
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
        message.channel.send(`
   **⇏ __General Commands__**
    **${prefix}bc ⇏** برود كاست للكل
    **${prefix}obc ⇏** برود كاست للأونلاين
    **${prefix}setstreaming ⇏** وضع الحالة لـ بث مباشر
    **${prefix}setwatching ⇏** ضع الحالة لـ مشاهدة
    **${prefix}setlistening ⇏** وضع الحالة لـ استماع
    **${prefix}setplaying ⇏** وضع الحالة لـ لعب
    **${prefix}setnothing ⇏** ازالة حالة البوت
    **${prefix}setavatar ⇏** تحط صورة للبوت حقك
    **${prefix}setname ⇏** تحط اسم للبوت حقك`)
    }
    if(message.content.startsWith(prefix + "obc")){
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
        message.delete();
      var argsBC = message.content.split(' ').slice(1).join(' ');
      if(!argsBC) return message.channel.send("Type the message you want to send.");
        message.channel.send("انتظر قليلاً").then(message1 => {
          message.guild.members.filter(m => m.presence.status !== "offline").forEach(m => {
            m.send(argsBC.replace("[user]", m)).catch(err => console.log(err));
          });
          setTimeout(() => {
            message1.edit(`تم ارسال الرسالة الى \`${message.guild.members.filter(m => m.presence.status !== "offline").size}\` عضو بنجاح`
          , 10000);
          })
      })
    }
    if(message.content.startsWith(prefix + "bc")){
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
      message.delete();
    var argsBC = message.content.split(' ').slice(1).join(' ');
    if(!argsBC) return message.channel.send("Type the message you want to send.");
      message.channel.send("انتظر قليلاً").then(message1 => {
        message.guild.members.forEach(m => {
          m.send(argsBC.replace("[user]", m)).catch(err => console.log(err));
        });
        let members = message.guild.members
        setTimeout(() => {
          message1.edit(`تم ارسال الرسالة الى \`${members.size}\` عضو بنجاح`
        , 10000);
        })
    })
  }
         if(message.content.startsWith(prefix + "setlistening")){
           if(message.author.id != "529406835094978570") return;
 let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("مع الأسف اخوي ... م ينفع يكون اكثر من 50 حرف");
message.delete();
bot.user.setActivity(hargs, {
type: "LISTENING"
});
message.channel.send(`**Done! it's now Listening To:** ${hargs}`)
}

if(message.content.startsWith(prefix + "setwatching")){
  if(message.author.id != "529406835094978570") return;
 let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 50 حرف**");
message.delete();
bot.user.setActivity(hargs, {
type: "WATCHING"
});
message.channel.send(`**Done! it's now Watching:** (${hargs})`)
}

if(message.content.startsWith(prefix + "setstreaming")){
  if(message.author.id != "529406835094978570") return;
 let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 50 حرف**");
message.delete();
bot.user.setActivity(hargs, {
type: "STREAMING",
			 url: "https://www.twitch.tv/Vplo"
});
message.channel.send(`**Done! It's now Streaming:** ${hargs}`)
}

if(message.content.startsWith(prefix + "setplaying")){
  if(message.author.id != "529406835094978570") return;
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 50 حرف**");
message.delete();
bot.user.setActivity(hargs, {
type: "PLAYING"
});
message.channel.send(`**Done! It's now Streaming:** ${hargs}`)
}
if(message.content.startsWith(prefix + "setname")){
  if(message.author.id != "529406835094978570") return;
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء كتابة اسم البوت الذي تريده**");
if(hargs.length < 1 || hargs.length > 32) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 32 حرف**");
message.delete();
bot.user.setUsername(hargs)
message.channel.send(`**Done! My New Name is:** ${hargs}`)
}
if(message.content.startsWith(prefix + "setavatar")){
  if(message.author.id != "529406835094978570") return;
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع رابط الصورة**");
message.delete();
bot.user.setAvatar(hargs)
message.channel.send(`**Done! The new picture is:** ${hargs}`)
}
if(message.content.startsWith(prefix + "setnothing")){
  if(message.author.id != "529406835094978570") return;
 bot.user.setActivity("")
 message.channel.send(`Done!`)
 }
});
bot.login(process.env.BRC2)
