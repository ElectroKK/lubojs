module.exports = {
    name: 'ban',
    cooldown: 60,
    permissions: ["BAN_MEMBERS"],
    description: "This command bans a member!",
    execute(client, message, args, cmd, Discord, profileData){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("This user has been banned!");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}