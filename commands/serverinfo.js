const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'serverinfo',
  aliases: ['infoserver'],
  permissions: [],
  description: "displays server info",
  execute(client, message, args, cmd, Discord, profileData) {

    const serverinfo = new Discord.MessageEmbed()
    .setColor('#ff0f00')
    .setTitle(`Information about ${message.guild.name} server`)
    .setDescription('Server Info')
    .addFields(
      { name: 'Total Members:', value: `${message.guild.memberCount}`, inline: false},
      { name: 'Created at:', value: `${moment(message.guild.createdAt).format('MMM DD YYYY')}`, inline: false },
      { name: 'This server owned by:', value: `${message.guild.owner}`, inline: false },
      { name: 'Server ID:', value: `${message.guild.id}`, inline: false }
     )
    .setTimestamp()
    .setThumbnail(message.guild.iconURL())
    .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
  
      message.channel.send(serverinfo)
  }
}