const { MessageCollector } = require('discord.js');
const mongoose = require('mongoose')
const profileModel = require("../models/profileSchema");
module.exports = {
    name : 'scramble',
    description: 'Attempt to unscramble the given scrambled word',
    cooldown: 30,

    async execute(client, message, args, cmd, Discord, profileData) {
        let words = ['icecream', 'shirt', 'goat', 'sick', 'lubo', 'salty', 'pencil', 'discord', 'computer', 'pokemon'];
        let word = words[parseInt(Math.random() * words.length)];

        let scrambled = word.split('');
    
        scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        while(scrambled.join('') == word) scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        message.channel.send(`Your word is... \`${scrambled.join('')}\`! Unscramble the given word.`);
        
        const collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
            max: 1,
        });

        collector.on('collect', async(msg) => {
            if(msg.content.toLowerCase() == word.toLowerCase()) return message.channel.send(`That's correct! Good job!`).then(async() => {
                  const randomNumber = Math.floor(Math.random() * 750) + 650;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          lubi: randomNumber,
        },
      }
    );

    message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`Game Rewards`)
        .setDescription(`You earned ℒ ${randomNumber} for unscrambling the word!`)
        .setFooter(``)
        .setTimestamp()
        .setColor('GREEN')
    )
            })
            else return message.channel.send(`That's incorrect. Better luck next time :/`);
        });

        collector.on('end', async(collected) => {
            if(collected.size == 0) message.channel.send(`You timed out! Respond quicker next time.`);
        });
    }
};