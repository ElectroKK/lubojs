module.exports = {
    name: 'mod',
    aliases: ['modcmd', 'moderator'],
    permissions: [],
    description: "mod branch",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(':cop: Help Mod')
        .setDescription("Mod and Admin commands can only be used if you have the correct perms: \n`.clear (*number*)` Deletes a mass amount of messages. You must specify in digits. \n`.kick (*@member id*)` Kicks a member \n`.ban (*@member id*)` Bans a member\n`.embed` Sends an embed in chat\n`.slowmode` sets a slowmode for a channel")
        .addFields()
        .setFooter('Mods and Admins can only use these commands!');

        message.channel.send(newEmbed);
    }
    
}