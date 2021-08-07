module.exports = {
    name: 'rules',
    aliases: ['rs', 'rul', 'r', 'rule', 'ruls'],
    permissions: [],
    description: "This is the command where people can get rules on Lubo",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Lubo Rules')
        .setDescription('While using Lubo, certain rules need to be followed. Not following or breaking rules can result in bans!')
        .addFields(
          {name: 'Rule 1: User-bots, Spamming and Macros', value: 'Usage of user bots, scripts, auto typer, macros, or anything else enabling automation of commands is NOT Allowed. Also, huge amounts of spam is not allowed and will also be punished.'},
          {name: 'Rule 2: Sharing Exploits', value: 'Sharing exploits, cheats or bugs with other users is forbidden. Please report all exploits and bugs to staff Lubo Server so that we can fix it as soon as possible.'},
          {name: 'Rule 3: Racism, Homophobia, Sexism or Slurs', value: 'None of the above will be tolerated through usage of Lubo. We will not punish you for what you say outside of the usage of our commands. Evidence found of this done through our commands will result in punishment.'},
          {name: 'Rule 4: Etiquette', value: 'Starting harmful rumors about the bot, causing unnecessary drama within our servers about the bot, or witch hunting staff members are all ban worthy behaviors.'},
          {name: 'Rule 5: Discord Terms of Service and Usage Guidelines', value: "Through usage of Lubo, you accept Lubo's Rules. Additionally, you accept Discord's Terms of Service and Community Guidelines, these of which are enforceable through Lubo."}


        )
        .setFooter('Please report all users who break rules in the Offical Lubo Server!');

        message.channel.send(newEmbed);
    }
    
}