module.exports = {
    name: 'kick',
    cooldown: 60,
    permissions: ["KICK_MEMBERS"],
    description: "This command kicks a member!",
    execute(client, message, args, cmd, Discord, profileData){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("This user has been kicked!");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}