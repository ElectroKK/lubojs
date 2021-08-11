module.exports = {
    name: 'help',
    aliases: ['hp', 'hl', 'h'],
    permissions: [],
    description: "Main help command",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Lubo')
        .setDescription('Hello!\nMy name is Lubo and I am a multi use bot at your service! I have lots of commands you can use. \n*Use* `.allcmd` *to view a list of ALL lubo commands!*\n:moneybag: **Currency commands:** `.balance`, `.beg`, `.search`, `.daily`, `.work`, `.guessnumber`,  `.withdraw`, `.deposit`\n😜 **Fun Commands:** `.8ball`, `.avatar`, `.rps`\n:notes: **Music Commands:** `.play`, `.stop`, `.skip`, `.pause`, `.unpause`, `.spotifysearch` \n:cop: **Mod commands:** `.clear`, `.kick`, `.ban`, `.embed`, `.slowmode`, `.poll`\n:book: **Info Commands:** `.reportbug`, `.botinfo`, `.invite`, `.vote`, `.stats` `.speed`\n**💡 Utility Commands:** `.remind`, `.weather`, `.serverinfo`, `userinfo`')
        .addFields()
        .setFooter('By continuing to using Lubo commands, you agree to all Lubo Rules. Rules can be viewed with .rules');

        message.channel.send(newEmbed);
    }
    
}


