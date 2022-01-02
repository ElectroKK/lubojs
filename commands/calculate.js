const math = require('discord-math');
 
module.exports = {
    name: "calculate",
    aliases: ['cal', 'math'],
    description: "The bot does math for you",
    async execute(client, message, args, cmd, Discord, profileData) {
        try {
            let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return message.channel.send('Num1 needs to be specified! **A space also needs to be between the numbers like this:** `1 + 1`');
            if (!operation) return message.channel.send('An operation was not specified! I only understand +, - *, /, and **');
            if (!num2) return message.channel.send('Num2 needs to be specified!');
 
            message.channel.send(`**Answer:**\n${math.calculate(num1, operation, num2)}`);
        } catch (e) {
            console.log(e);
        }
    }
}