module.exports = {
    name: 'help',
    aliases: ['hp', 'hl', 'h'],
    permissions: [],
    description: "Main help command",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Lubo')
        .setDescription('Hello!\nMy name is Lubo and I am a multi use bot at your service! Although I am still not finished, I have a few features that you can still use. \nLook at the commands below to get more specific commands from the category.\n:moneybag: **Currency commands:** `.currency`, `.cc` \n:notes: **Music Commands:** `.music`, `.muc`, .`.mc` \n:cop: **Mod commands:** `.mod`, `.modcmd`  \n:book: **Information commands** `.external`, `.information`, `.info`, `.ic`')
        .addFields()
        .setFooter('Share this bot with others so we can grow!');

        message.channel.send(newEmbed);
    }
    
}