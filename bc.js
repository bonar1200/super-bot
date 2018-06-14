
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix= '!';
client.on('message', message => {

if(message.content.startsWith('!bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Recrownd Server Broadcast";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(m => {
m.react('✅')
.then(() => m.react('❌'))
.then(() =>m.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = m.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = m.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**? | تم لقد تم وصول البرودكاست إلى ${message.guild.members.size} عضو**`).then(m => m.delete(5000));
 m.delete();

message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
m.delete();
})
})
}
});
  client.on('message', message => {

if(message.content.startsWith('!rolebc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(6 + prefix.length);
let copy = "Recrownd Server Broadcast";
let request = `Requested By ${message.author.username}`;
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("**لا توجد رتبة بهذا الاسم**")
                    return;
                }
if (!args) return message.reply("**قم بكتابة الرسالة | !rolebc @role message**");message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(m => {
m.react('✅')
.then(() => m.react('❌'))
.then(() =>m.react('✅'))
     
     

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = m.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = m.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**? | تم لقد تم وصول البرودكاست إلى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`).then(m => m.delete(5000));
 m.delete();

            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
var bc1 = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
n.send({ embed: bc1 })
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
m.delete();
})
})
}
    

});

client.login(process.env.RECROWND_ADMIN);
