const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
     client.user.setActivity("Your Ass",{type: 'WATCHING'})


});
client.login(process.env.BOT_TOKENN);

// STARK BANK
const client1 = new Discord.Client();

client1.on("ready", () => {


});
client1.login(process.env.STARK_BANK);
// //

const client2 = new Discord.Client();

client2.on("ready", () => {


});
client2.login(process.env.STARK_TOKEN1);
// //

const client3 = new Discord.Client();

client3.on("ready", () => {



});
client3.login(process.env.STARK_TOKEN2);
// //

const client4 = new Discord.Client();


client4.login(process.env.LOUIS);

