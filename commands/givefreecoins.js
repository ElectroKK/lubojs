const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'givefreecoins',
    aliases: ['gfc'],
    cooldown: [10],
    description: "This is the share coins command",
     async execute(client, message, args, cmd, Discord, profileData) {
         if (message.member.id != "781644770035761153") return message.channel.send(`Sorry! Only the Kaleb can run this command!`);
         if(!args.length) return message.channel.send('You need to mention a player to give them coins');
         const amount = args[1]
         const target = message.mentions.users.first();
         if(!target) return message.channel.send("That user does not exist");

         if(amount % 1 != 0 || amount <= 0) return message.channel.send("You must give a whole number Kaleb!");

         try{
            const targetData = await profileModel.findOne({ userID: target.id });
            if(!targetData) return message.channel.send(`This user doesn't exist in the database`);

            await profileModel.findOneAndUpdate({
                userID: target.id
            },
            {
                $inc: {
                    lubi: amount,
                },
            }
            );

            return message.channel.send(`You gave this player ℒ ${amount}! `);
                 }catch(err){
             console.log(err)
         }
     },
};