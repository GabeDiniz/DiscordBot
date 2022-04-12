module.exports = (Discord, client, message) => {
    const prefix = '!';

    // if the message doesn't start with "!" then DO NOT proceed
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

    // Music Arguments
    let args = message.content.slice(prefix.length).split(/ +/); // List of words sent (ex: ['tell', 'me', 'a', 'joke'])
    let cmd = args.shift().toLowerCase(); // First word (ex: play)
    
    // TESTING ***
    console.log('Music arg:', args, "cmd:", cmd);

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd)); // gets command file by **MODULE NAME**
    if(command) command.execute(client, message, args, cmd, Discord); // runs command file


    // Text Commands Variables 
    args = message.content.slice(prefix.length); //.split(/ +/)
    cmd = args.toLowerCase(); //.shift()

    // Calling Text Commands ===================================================================
    if (cmd === 'help') {
        message.channel.send('**These are my current commands:**');
        message.channel.send('Text Commands: ping | tell me a joke');
        message.channel.send('Music Commands: play music with: !play *title* or *URL* | !leave | !skip | !stop');
    } else if (cmd === 'tell me a joke') {
        client.commands.get('joke').execute(client, message, args);
    } else {
        client.commands.get('chat').execute(client, message, args);
    }
}

// NOTES: ================================================================================
// get('play').execute: *play* MUST MATCH module NAME, file name is irrelevant
// put **client** FIRST in all modules and callings (ex: .execute(*client*, message, args, others..))
