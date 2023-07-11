module.exports = {
    name: 'leave',
    description: 'Makes bot leave voice channel',
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("You cannot make me leave if you're not in a voice channel 🤦‍♂️");
        await voiceChannel.leave();
        await message.channel.send('Leaving channel :smiling_face_with_tear:');

        return;
    }
}
