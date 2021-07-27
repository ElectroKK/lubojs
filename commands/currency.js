module.exports = {
    name: 'currency',
    aliases: ['cc', 'cur', 'curen', 'currency.commands'],
    permissions: [],
    description: "This is the command where people can get info on Lubo",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(':moneybag: Help Currency')
        .setDescription("The official name of Lubo's currency is *Lubi* pronounced *Loo·bye*. You will more commonly see Lubi in the form of ℒ. \nYour wallet will have 1000 coins to start in order for you to start playing around. \nHere are the commands that you can try to get started!: \n`.bal` to view balance \n`.beg` to beg for some coins \n`.search` to find a few coins \n`.daily` to claim daily rewards \n`.work` to earn a few extra coins  \n`.with`/`.dep` to deposit and withdraw coins from bank")
        .addFields()
        .setFooter('Stay tuned for more commands coming soon!');

        message.channel.send(newEmbed);
    }
    
}