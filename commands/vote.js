module.exports = {
    name: 'vote',
    permissions: [],
    description: "This is the command where people can vote for Lubo",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Click here to vote for Lubo on top.gg!')
        .setURL('https://top.gg/bot/861724027226816553')
        .setDescription('Thanks for your support!')
        .addFields()
        .setFooter('Share this bot with others so we can grow!');

        message.channel.send(newEmbed);
    }
    
}