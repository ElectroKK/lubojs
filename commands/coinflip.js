module.exports = {
    name: 'coinflip',
    aliases: ['flip', 'cf', 'flipacoin', 'fac'],
    cooldown: [3],
    description: "Flips a virtual coin",
    async execute(client, message, args, cmd, Discord, profileData) {
  const { MessageEmbed } = require('discord.js')
  const embed1 = new MessageEmbed()
        .setTitle(":coin: Coinflip")
        .setDescription("React to flip your coin! \n :sunglasses: for heads and :cat2: for tails")
        .setTimestamp()
    .setColor('RANDOM')
            let msg = await message.channel.send(embed1)
        await msg.react("😎")
        await msg.react("🐈")
    client.on('messageReactionAdd', async(reaction, user) => {
    const choices= ["heads", "tails", "tails"];
const choice = choices[Math.floor(Math.random() * choices.length)];
 const embed = new MessageEmbed()
 .setColor('RANDOM')
 .setTitle(':coin: Coinflip Result')  
 .setDescription(`Your coin landed on **${choice}**!\nTo flip again, unreact and react again!`) 
 .setTimestamp()
 msg.edit(embed) 
    
    })
    }
}