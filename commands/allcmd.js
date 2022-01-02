module.exports = {
    name: 'allcmd',
    aliases: ['all', 'allc', 'allcmds', 'cmd', 'cmds'],
    permissions: [],
    description: "This is the command where people can get all lubo commands",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('ALL Lubo Commands')
        .setDescription('Here is a list of all Lubo commands you can use!')
        .addFields(
          {name: ':moneybag: Currency Commands', value: '`.balance`, `.beg`, `.search`, `.daily`, `.work`, `.guessnumber`, `.scramble`, `.withdraw`, `.deposit`'},
          {name: ':notes: Music Commands', value: '`.play`, `.stop`, `.skip`, `.pause`, `.unpause`,`.spotifysearch`'},
          {name: ':police_officer: Moderator Commands', value: '`.clear`, `.kick`, `.ban`, `.embed`, `.slowmode`, `.poll`'},
          {name: ':stuck_out_tongue_winking_eye: Fun Commands', value: '`.8ball`, `.avatar`, `.rps`, `.gtn`, `.tictactoe`, `.coinflip`, `.emojify`'},
          {name: ':bulb: Utility Commands', value: '`.remind`, `.weather`, `.userinfo`, `.serverinfo`, `.ytsearch`, `.calculate`'},
          {name: ':book: Information Commands', value: '`.reportbug`, `.botinfo`, `.rules` `.invite`, `.vote`, `.speed`, `.stats`'}
          


        )
        .setFooter('Please report users or bugs using .reportbug!');

        message.channel.send(newEmbed);
    }
    
}