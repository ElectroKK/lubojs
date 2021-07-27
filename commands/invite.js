module.exports = {
    name: 'invite',
    aliases: ['in', 'link', 'server', 'add', 'official', 'invite.link'],
    cooldown: 2,
    description: "This is the command where people can add Lubo to their servers",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Click here to invite Lubo to a server!')
        .setURL('https://discord.com/oauth2/authorize?client_id=861724027226816553&scope=bot&permissions=8589934591')
        .setDescription('**Click the words above to add Lubo to a server!** \nTo join the official Lubo Discord Server, click the link below! \nhttps://discord.gg/CvADbN3VrB')
        .addFields()
        .setFooter('Share this bot with others so we can grow!');

        message.channel.send(newEmbed); 
    }
    
}