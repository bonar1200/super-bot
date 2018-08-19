const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(` 
**Stark Market
- لبيع الكريدت
- لبيع التاقات
- لبيع حسابات ماينكرافت
- لعمل تصاميم لسيرفرك
- ولبيع اشياء اخرى مثل النيترو وإلخ
- ونسوي فعاليات على الكريدت
حياك الله ياقلبي.
https://discord.gg/EWGqj6a
${member}**`) 
}).catch(console.error)
})
A7MD.login(process.env.STARK_AD);


const A7MD2 = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD2.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(` 
**Stark Market
- لبيع الكريدت
- لبيع التاقات
- لبيع حسابات ماينكرافت
- لعمل تصاميم لسيرفرك
- ولبيع اشياء اخرى مثل النيترو وإلخ
- ونسوي فعاليات على الكريدت
حياك الله ياقلبي.
https://discord.gg/EWGqj6a
${member}**`) 
}).catch(console.error)
})
A7MD2.login(process.env.STARK_AD2);


