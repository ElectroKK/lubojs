 module.exports = {
    name: "balance",
    aliases: ['b', 'bal', 'bl'],
    permissions: [],
    cooldown: 3,
    description: "This is the command where people can see their balance",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#3e9c35')    
        .setTitle('Balance')
        .setDescription(`:money_with_wings: **Wallet:** ℒ ${profileData.lubi}\n:bank: **Bank:** ℒ ${profileData.bank}`)
        .addFields()
        .setFooter('Try running .beg to get some extra Lubi!');

        message.channel.send(newEmbed); 
    }
    
}