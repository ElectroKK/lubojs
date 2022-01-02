module.exports = {
    name: 'newcmd',
    aliases: ['newestcommands', 'newest'],
    permissions: [],
    description: "This is the command where people can see the latest Lubo commands",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Lubo Rules')
        .setDescription('For more Lubo News and Updates, be sure to join the official lubo server!')
        .addFields(
          {name: 'Newest Command:', value: '`.calculate` - allows you to do math with Lubo using +,-,*,/'},
          {name: '2nd Command:', value: '`.scramble` - gives you a scrambled word in chat. Unscramble the word to get a small payout of Lubi!'},
          {name: '3nd Newest Command:', value: '`.emojify` - the word(s) you put after this command will be converted into emoji form!'},

         


        )
        .setFooter('Add Lubo to as many servers as you can so we can grow!');

        message.channel.send(newEmbed);
    }
    
}