module.exports = {
    name: 'botinfo',
    aliases: ['bi', 'bot', 'boti', 'binfo', 'bio'],
    permissions: [],
    description: "This is the command where people can get info on Lubo",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Bot Info')
        .setDescription('Lubo was created in July 2021 by ElectroKK commonly known as Kaleb. It was first named KKcoin and was a simple economy bot that had a few basic money commands, but then branched out and became a multi-use bot with more and more commands. The name Lubo, *pronounced loo·bow* was created a long time ago for a different purpose but KKcoin adopted this name as its own. \nMany softwares were used when ElectroKK coded this bot including Node.js, Mongodb, Visual Studio Code, Github, Heroku, Robo3t, and many other Discord packages. \nWe hope you enjoy using Lubo and share it with others!')
        .addFields()
        .setFooter('Share this bot with others so we can grow!');

        message.channel.send(newEmbed);
    }
    
}