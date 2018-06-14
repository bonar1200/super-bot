const { Client, Util } = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core');
const prefix = 'r!';
const YouTube = require('simple-youtube-api');
const ms = require("ms");
const Discord = require("discord.js");


const client = new Client({ disableEveryone: true });


const youtube = new YouTube('AIzaSyCv1YSWJqWbBIvAd2fFOzBl72uwDuNizhg');

const queue = new Map();


client.on('message', message => {


     


client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed1 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('💎 | name :  ',`${member}`)
        .addField('❤️ | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | ID :', "**[" + `${member.id}` + "]**" )
                .addField('⬆️| انت العضو رقم',`${member.guild.memberCount}`)               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
  channel.sendEmbed(embed1);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك `)
        .setDescription(`مع السلامه تشرفنا بك `)
        .addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });
	


client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "log1")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("User joined ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "log1")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("User left ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});


});


client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;

  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log1')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)

       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()

       ch.send(embed)
    }
  })
});
client.login(process.env.RECROWND_ADMIN);




