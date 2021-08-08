module.exports = {
    name: 'fun',
    aliases: ['funcmds', 'fc'],
    permissions: [],
    description: "fun commands branch",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9FE2BF')
        .setTitle('😜 Help Fun')
        .setDescription("Fun commands are not necessaryly for a specific purpose, you can just have fun with them!\n`.8ball (Y or N question)` Random answer generator\n`.avatar` Send a users (or your) avatar")
        .addFields()
        .setFooter('Please follow server rules when using fun commands!');

        message.channel.send(newEmbed);
    }
    
}