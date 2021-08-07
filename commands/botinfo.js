module.exports = {
    name: 'botinfo',
    aliases: ['bi', 'bot', 'boti', 'binfo', 'bio'],
    permissions: [],
    description: "This is the command where people can get info on Lubo",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Bot Info')
        .setDescription('@Lubo Discord Bot 2021\n*All Rights Reserved*\nOwned by Kaleb Adatia\nCreated in July 2021\n**USER INFO:**\nLinks:\nAdd Lubo:\nhttps://tinyurl.com/AddLubo\nOfficial Website\n*Coming Soon*\nVote Lubo: \nhttps://tinyurl.com/VoteLubo\nOfficial Lubo Server:\nhttps://discord.gg/NKBjkuJKqd\nReporting:\nEither use `.reportbug` to report bugs or go to <#870055249220620428> in the Official Lubo Server to report users, bugs, and anything else. *Reporters are well appreciated and will be rewarded!*')
        .addFields()
        .setFooter('Share this bot with others so we can grow!');

        message.channel.send(newEmbed);
    }
    
}