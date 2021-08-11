const Discord = require('discord.js')

module.exports = {
    name: 'poll',
  aliases: [],
  permissions: ["MANAGE_MESSAGES"],
  description: "make a poll",
  execute(client, message, args, cmd, Discord, profileData) {
    if(!args[0]) return message.channel.send('Enter a question for the poll!');
    
    let msg = args.slice(0).join(' ');

    let poll = new Discord.MessageEmbed()
      .setColor('FF0000')
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle(`📋 Poll`)
      .setDescription(`${msg}`)
      .setFooter(`Executed by: ${message.author.username}`, message.author.displayAvatarURL());
        
    message.delete();
    message.channel.send(poll).then(messageReaction => {
      messageReaction.react('✅');
      messageReaction.react('❌');
    });
  }
}