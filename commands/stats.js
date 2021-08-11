const { MessageEmbed } = require("discord.js");
const ms = require('ms')

module.exports = {
  name: 'stats',
  aliases: ['botstats','stat'],
  permissions: [],
  description: "bot stats",
  execute(client, message, args, cmd, Discord, profileData) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor(client.color)
    .setTitle('Lubo Stats')
    .setDescription(`Number of servers: ${client.guilds.cache.size} \nNumber of users: ${client.users.cache.size} \nUptime: ${ms(client.uptime)} \nPing: ${client.ws.ping} \nNumber of commands: ${client.commands.size}`);

    message.channel.send(newEmbed);
  }
}