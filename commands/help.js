module.exports = {
    name: 'help',
    aliases: ['hp', 'hl', 'h'],
    permissions: [],
    description: "Main help command",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Lubo')
        .setDescription('Hello!\nMy name is Lubo and I am a multi use bot at your service! I have lots of commands you can use. Look at the commands below to get more specific commands from the category.\n*Use* `.allcmd` *to view a list of ALL lubo commands!*\n:moneybag: **Currency commands:** `.currency`, `.cc` \n:notes: **Music Commands:** `.music`, `.muc`, `.mc` \n:cop: **Mod commands:** `.moderator`,`.mod`  \n:book: **Info Commands:** `.information`, `.info`, `.ic` \n😜 **Fun Commands:** `.fc`, `.funcmds`, `.fun`\n**💡 Utility Commands:** `.utility`, `.uti`, `.uc`')
        .addFields()
        .setFooter('By continuing to using Lubo commands, you agree to all Lubo Rules. Rules can be viewed with .rules');

        message.channel.send(newEmbed);
    }
    
}


