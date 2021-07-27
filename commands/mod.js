module.exports = {
    name: 'mod',
    aliases: ['modcmd'],
    permissions: [],
    description: "mod branch",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(':cop: Help Mod')
        .setDescription("Mod and Admin commands are a great way to control and manage your server. So far, Lubo only has a few Mod/Admin commands that you can use. Look at the commands below to see what they do: \n`.clear (*number*)` Deletes a mass amount of messages. You must specify in digits. \n`.kick (*@member id*)` Kicks a member \n`.ban (*@member id*)` Bans a member")
        .addFields()
        .setFooter('Mods and Admins can only use these commands!');

        message.channel.send(newEmbed);
    }
    
}