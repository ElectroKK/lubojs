const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'gtn',
    aliases: [],
    cooldown: 59,
    description: 'Play guess the number',
    
    async execute(client, message, args, cmd, Discord, profileData) {
        let number = Math.ceil(Math.random() * 10000);
        let finished = false;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Guess The Number Game`)
            .setDescription(`Guess a number (1-10000). You have **1 minute starting NOW** (No Lubi Earnings)`)
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
    
                if(parseInt(attempt) !== number) return message.reply(`That is incorrect. Please choose again (My number is ${parseInt(msg) < number ? '**higher**' : '**lower**'} than ${parseInt(msg)})`)
    
                finished = true;
    
                message.channel.send(
                    new MessageEmbed()
                    .setTitle(`Correct`)
                    .setDescription(`${parseInt(msg)} is correct!`)
                    .setFooter(`It took you ${tries} times to get it! \nTo play a "Guess the Number" Game for lubi, use .guessnumber.`)
                    .setTimestamp()
                    .setColor('GREEN')
                )
            }
        });
        
        collector.on('end', async(collected) => {
            if(finished == false) return message.reply(`You timed out! **The number was ${number}.** To play this game for lubi, use .guessnumber.`);
        });
    }
}