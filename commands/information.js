module.exports = {
    name: 'information',
    aliases: ['infocmd', 'info', 'ic'],
    permissions: [],
    description: "Info commands",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#C0C0C0')
        .setTitle(':book: Help Information')
        .setDescription("**Bot Links:**\nAdd Lubo:\nhttps://tinyurl.com/AddLubo\nOfficial Website\n*Coming Soon*\nVote Lubo: \nhttps://tinyurl.com/VoteLubo\nOfficial Lubo Server:\nhttps://discord.gg/NKBjkuJKqd\nInfo Commands: \n`.reportbug` Report a bug\n`.botinfo` Extra information about Lubo \n`.invite` This command will allow you to add Lubo to a server and join the Official Lubo Server! \n`.vote` Vote for Lubo! \n`.speed` tells you current response time of Lubo")
        .addFields()
        .setFooter('Share this bot so we can grow!');

        message.channel.send(newEmbed);
    }
    
}