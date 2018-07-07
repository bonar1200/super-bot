const Eris = require("eris");
var kboosh = new Eris(process.env.RECROWND_BOT1);
var kboosh_id = "465262412283641857";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "Recrownd Voice ⇏「" + x + "」"});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "Recrownd Voice ⇏「" + x + "」"});
});
//

        let users = kboosh.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        while (i <= messages[0].length - 1) {
            check = kboosh.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(kboosh.channel.id, "**عدد المتصلين بالرومات الصوتية: **"+x+"** عضو!**");
    kboosh.editChannel(kboosh_id, { name : "Recrownd Voice ⇏「"+x+"」"});
    messages = [];


  

kboosh.connect(process.env.RECROWND_BOT1)
