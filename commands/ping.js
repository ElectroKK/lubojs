module.exports = {
  name: "ping",
  description: "Gets the ping of the bot",
  cooldown: 5, // Optional
  async execute(message, args, cmd, client, Discord, prefix, profileData, profileModel, serverData, serverModel) {

    const timeTaken = Date.now() - message.createdTimestamp;
    const pingEmbed = new MessageEmbed()
    .setColor('#CCCC00')
    .setDescription(`🏓 Current Ping: ${timeTaken}ms.`);

    message.channel.send(pingEmbed);

  }
}