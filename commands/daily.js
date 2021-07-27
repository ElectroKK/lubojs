const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'daily',
    aliases: ['d', 'dail', 'day'],
    cooldown: [86400],
    description: "claim daily rewards",
    async execute(client, message, args, cmd, Discord, profileData) {
         
        const randomNumber = Math.floor(Math.random() * (7000 - 6000 + 1)) + 6000;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          Lubi: randomNumber,
        },
      }
    );
    const newEmbed = new Discord.MessageEmbed()
        .setColor('#4B0082')
        .setTitle('Daily Rewards Claim')
        .setDescription(`${message.author.username}, You have recieved ℒ ${randomNumber} for your daily rewards! You must wait 24 hours before claiming this again. :moneybag:`)
        .addFields()
        .setFooter('Use .bal to check your balance');

        message.channel.send(newEmbed);
    }
    
}