const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'withdraw',
    aliases: ['with'],
    cooldown: [2],
    description: "This is the Withdraw command",
     async execute(client, message, args, cmd, Discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
        
        try{
            if(amount > profileData.bank) return message.channel.send(`You don't have that amount of Lubi to withdraw`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            },
            {
              $inc: {
                lubi: amount,
                bank: -amount,
            
            },
        }
            );
            const newEmbed = new Discord.MessageEmbed()
        .setColor('#2F4F4F')
        .setTitle('Withdraw')
        .setDescription(`*Your transaction was successful!* \n**You have withdrawn ℒ ${amount} into your wallet**`)
        .addFields()
        .setFooter('Dad: Become Doctor not business man!');

        message.channel.send(newEmbed);
        }catch(err){
            console.log(err)
        }
    },
    };