const Discord = require('discord.js');
const client = new Discord.Client();
// const prefix = '!';
// Turn Bot Online with "node ."

// Code for new Files
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('OTU3MzkxMTcwNDA3ODk1MTMx.Yj-GAg.Lbs1tFXB-Rej9l0t05lR_bw5UnE');
// ODkwNjE0NjUwODU5ODM1NDQy.YUyXhw.BA2ofeADDWkiaungJEcagMw8ylw