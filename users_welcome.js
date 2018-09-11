var ServerID = "475578183656275968"; 
var ChannelID = "488866150193692683";

const Discord = require('discord.js');
const { client, client2} = new Discord.Client();

function timerFunc() {
    client.on('message', msg => {
    client2.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.NEW1);
client2.login(process.env.NEW2);
