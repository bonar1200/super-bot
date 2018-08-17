const discriminator = ["6666", "2121", "0000", "0001", "0002", "6969", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "2169", "6921", "0021", "0690", "0210", "2100", "0069"];
console.log("DISCORD DISCRIM SEEKER || created by Tyler#0130");



const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

const discrimSeeker = async () => {
    let users = client.users.filter(u => u.discriminator === client.user.discriminator);
    if (users.size < 2) {
        console.error("A user wasn't found with your current discriminator, which doesn't allow this selfbot to work. (Join more servers.)");
        process.exit(1);
    }
    let user = users.random();
    try {
        await client.user.setUsername('tag', process.env.TAG1_PASS);
        if (discriminator.indexOf(client.user.discriminator) > -1) {
            console.log("One of your choosen discriminators was selected. Will set your username in 5 minutes. DO NOT EXIT THIS PROGRAM.");
            client.setTimeout(async () => {
                try {
                    console.log("Setting your username...");
                    await client.user.setUsername('tag', process.env.TAG1_PASS);
                    console.log("Username set. Exiting...");
                    process.exit(1);
                }
                catch (e) {
                    console.error("Your username failed to reset to your preferred username. You'll have to manually reset your username.");
                    process.exit(1);
                }
            }, 300000);
        }
        else return console.log("The selected discriminator was not one of your preferred discriminators. Will reset your username in 30 minutes.");
    }
    catch (e) {
        console.error("Your username failed to set.");
        console.error(e);
    }
};

client.on("ready", () => {
    console.log("Alright, let's do this. Will change your username in 10 seconds.");
    client.setTimeout(() => discrimSeeker(), 10000);
    client.setInterval(() => discrimSeeker(), 1800000);
});

client.login(process.env.TAG1_TOKEN);
