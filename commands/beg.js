const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'beg',
    aliases: ['bg'],
    cooldown: [45],
    description: "This is the beg command to beg for a few coins",
    async execute(client, message, args, cmd, Discord, profileData) {
         
        const randomNumber = Math.floor(Math.random() * 500) + 1;
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
        .setColor('#FFDAB9')
        .setTitle('Beg')
        .setDescription(`${message.author.username}, You begged your Mom for money and recieved ℒ ${randomNumber}! :rolling_eyes:`)
        .addFields()
        .setFooter('Message from Mom: YOU ARE MAKING ME BROKE! GET A JOB!');

        message.channel.send(newEmbed);
    }
    
}