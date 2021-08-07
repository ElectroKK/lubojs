const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'deposit',
    aliases: ['dep'],
    cooldown: [2],
    description: "This is the deposit command",
     async execute(client, message, args, cmd, Discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
        try{
            if(amount > profileData.lubi) return message.channel.send(`You don't have that amount of Lubi to deposit`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            },
            {
              $inc: {
                lubi: -amount,
                bank: amount,
            
            },
        }
            );
            const newEmbed = new Discord.MessageEmbed()
        .setColor('#2F4F4F')
        .setTitle('Deposit')
        .setDescription(`*Your transaction was successful!* \n**You deposited ℒ ${amount} into your bank**`)
        .addFields()
        .setFooter('Dad: Become Doctor not business man!');

        message.channel.send(newEmbed);
        }catch(err){
            console.log(err)
        }
    },
};

