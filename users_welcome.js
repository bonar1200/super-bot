var ServerID = "475578183656275968"; //ط§ظٹ ط¯ظٹ ط§ظ„ط³ظٹط±ظپط±
var ChannelID = "488866150193692683";// ط§ظٹ ط¯ظٹ ط§ظ„ط±ظˆظ…

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);
// Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roأ½ale"1.5k ًںچ·#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.NEW1);
