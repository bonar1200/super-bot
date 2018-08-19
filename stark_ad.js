const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send('**Stark Market\n- لبيع الكريدت\n- لبيع التاقات\n- لبيع حسابات ماينكرافت\n- لعمل تصاميم لسيرفرك\n- ولبيع اشياء اخرى مثل النيترو وإلخ\n- ونسوي فعاليات على الكريدت\n حياك الله ياقلبي\nhttps://discord.gg/EWGqj6a\n**')

}).catch(console.error)
})
A7MD.login(process.env.STARK_AD);


const A7MD2 = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD2.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send('**Stark Market\n- لبيع الكريدت\n- لبيع التاقات\n- لبيع حسابات ماينكرافت\n- لعمل تصاميم لسيرفرك\n- ولبيع اشياء اخرى مثل النيترو وإلخ\n- ونسوي فعاليات على الكريدت\n حياك الله ياقلبي\nhttps://discord.gg/EWGqj6a\n**')

}).catch(console.error)
})
A7MD2.login(process.env.STARK_AD2);






