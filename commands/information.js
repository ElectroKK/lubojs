module.exports = {
    name: 'information',
    aliases: ['infocmd', 'info', 'ic'],
    permissions: [],
    description: "Info commands",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#C0C0C0')
        .setTitle(':book: Help Information')
        .setDescription("If you are new to using Lubo and would like to know some more information, feel free to run some of the following commands: \n`.botinfo` Extra information about Lubo \n`.invite` This command will allow you to add Lubo to a server and join the Official Lubo Server!")
        .addFields()
        .setFooter('Share this bot so we can grow!');

        message.channel.send(newEmbed);
    }
    
}