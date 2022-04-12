module.exports = {
    name: 'chat', 
    description: 'Regular chat commands',
    execute(client, message, args) {

        if (args === 'ping') {
            message.channel.send('pong');
        }
        
    }
}