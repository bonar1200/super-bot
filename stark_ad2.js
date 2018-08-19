const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**Stark Market
- لبيع الكريدت
- لبيع التاقات
- لعمل تصاميم لسيرفرك
- ويوجد لدينا بيع حسابات ماينكرافت
- ونسوي فعاليات على الكريدت
حياك الله ياقلبي.
https://discord.gg/EWGqj6a
${member}**`) 
}).catch(console.error)
})
A7MD.login(process.env.STARK_AD);
