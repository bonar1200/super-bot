const Eris = require("eris");
var kboosh = new Eris(process.env.RECROWND_BOT1);
var kboosh_id = "465273227824988186";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});

kboosh.on("messageCreate", (msg) => {
    if(msg.author.id !== "448675703018487819") return kboosh.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "$voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「"+x+"」"});
    messages = [];
}, 1);
    }
});

let  ID = "465283291902115850";
kboosh.on("ready", ready => {
setInterval(function(){

            let currentTime = new Date(),
            hours = currentTime.getHours() + 2 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();



            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
kboosh.editChannel("465283291902115850", {name : "لا آله إلا الله"})
kboosh.editChannel("465283291902115850", {name : "الحمدالله"})
kboosh.editChannel("465283291902115850", {name : "استغفرالله"})
kboosh.editChannel("465283291902115850", {name : "Welcome"})
kboosh.editChannel("465283291902115850", {name : "Welcome To"})
kboosh.editChannel("465283291902115850", {name : "Welcome To Recrownd"})


}, 3000);

});


kboosh.connect(process.env.RECROWND_BOT1)
