module.exports = {
  name: "ping",
  aliases: ['speed', 'test'],
  description: "Gets the ping of the bot",
  cooldown: 5, // Optional
  async execute(client, message, args, cmd, Discord, profileData) {

    const timeTaken = Date.now() - message.createdTimestamp;
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#CCCC00')
    .setDescription(`🏓 Current Ping: ${timeTaken}ms.`);

    message.channel.send(newEmbed);

  }
}
