module.exports = {
    name: 'music',
    aliases: ['music.commands', 'mus', 'mc'],
    permissions: [],
    description: "Music branch",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7FFFD4')
        .setTitle(':notes: Help Music')
        .setDescription("Music commands are a fun and easy way to listen to music while using Discord. If you are new to using music bots on Discord, read the next few steps to learn how to play music. \nFirst, you are going to need to go to a channel that Lubo has permissions to talk in and type .play (Song of your choice). It can be any song and you can add key words if you would like. An example of a command with a key word to narrow the search would be `.play adele hello`. You can add as many songs to the queue as you would like and they will play one by one. There are other commands such as skip, pause, and stop. The descriptions for these commands are below: \n`.play (*song title*)` Plays a song \n`.pause` Pauses a song \n`.stop` Lubo leaves voice channel")
        .addFields()
        .setFooter('You must join a voice channel before using these commands!');

        message.channel.send(newEmbed);
    }
    
}