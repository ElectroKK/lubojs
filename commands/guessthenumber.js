const { MessageCollector, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose')
const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'guessthenumber',
    aliases: ['guessnumber'],
    cooldown: 2700,
    description: 'Play guess the number',
    
    async execute(client, message, args, cmd, Discord, profileData) {
        let number = Math.ceil(Math.random() * 10000);
        let finished = false;

        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`Guess The Number To Earn Lubi!`)
            .setDescription(`Guess a number (1-10000) for Lubi! **You have 1 minute starting NOW**`)
            .setColor('RANDOM')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        )

        let collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
        });

        let tries = 0;

        collector.on('collect', async(msg) => {
            if(finished == false) {
                let split = msg.content.split(/ +/);
                let attempt = split.shift();

                if(isNaN(attempt)) return message.reply(`You must choose an actual number`);

                tries++;
    
                if(parseInt(attempt) !== number) return message.reply(`That is incorrect. Please choose again (My number is ${parseInt(msg) < number ? 'higher' : 'lower'} than ${parseInt(msg)})`)
    
                finished = true;
    
                message.channel.send(
                    new MessageEmbed()
                    .setTitle(`Correct`)
                    .setDescription(`${parseInt(msg)} is correct!`)
                    .setFooter(`It took you ${tries} times to get it`)
                    .setTimestamp()
                    .setColor('GREEN')
                ).then(async() => {
                  const randomNumber = Math.floor(Math.random() * 4000) + 3000;
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
        new MessageEmbed()
        .setTitle(`Game Earnings`)
        .setDescription(`You earned ℒ ${randomNumber} for guessing the correct number!`)
        .setFooter(`There is a 45m cooldown on this command. To play a "guess the number" game for fun, use .gtn`)
        .setTimestamp()
        .setColor('GREEN')
    )
                })
            }
        });
        
        collector.on('end', async(collected) => {
            if(finished == false) return message.reply(`Uh oh! You time ran out! Try again in 45m for a chance to win Lubi! *To play a "guess the number" game for fun, use .gtn*`);
        });
    }
}