const Discord = require("discord.js");
const bot = new Discord.Client();

var anti_spam = require("discord-anti-spam");
 
anti_spam(bot, {
  warnBuffer: 7, //Maximum amount of messages allowed to send in the interval time before getting warned. 
  maxBuffer: 8, // Maximum amount of messages allowed to send in the interval time before getting banned. 
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned. 
  warningMessage: "**سيتم طردك إن لم توقف سبام**", // Warning message send to the user indicating they are going to fast. 
  banMessage: "تم الطرد بسبب السبام", // Ban message, always tags the banned user in front of it. 
  maxDuplicatesWarning: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned 
  maxDuplicatesBan: 10 // Maximum amount of duplicate messages a user can send in a timespan before getting banned 
});

bot.login(process.env.BOT_SPAM);

const bot1 = new Discord.Client();

 var anti_spam1 = require("discord-anti-spam");
anti_spam1(bot1, {
  warnBuffer: 7, //Maximum amount of messages allowed to send in the interval time before getting warned. 
  maxBuffer: 8, // Maximum amount of messages allowed to send in the interval time before getting banned. 
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned. 
  warningMessage: "**سيتم طردك إن لم توقف سبام**", // Warning message send to the user indicating they are going to fast. 
  banMessage: "تم الطرد بسبب السبام", // Ban message, always tags the banned user in front of it. 
  maxDuplicatesWarning: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned 
  maxDuplicatesBan: 10 // Maximum amount of duplicate messages a user can send in a timespan before getting banned 
});

bot1.login(process.env.BOT_SPAM1);
