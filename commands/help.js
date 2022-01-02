module.exports = {
    name: 'help',
    aliases: ['hp', 'hl', 'h'],
    permissions: [],
    description: "Main help command",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Lubo Help Menu')
        .setDescription("Hello!\nWelcome to my help menu! I have lots of commands you can use. \n*Use* `.newcmd` *to view the latest commands so you don't miss anything!*")
        .addFields(
           {name: ':moneybag: ❯ CURRENCY', value: '`.balance`, `.beg`, `.search`, `.daily`, `.work`, `.guessnumber`, `.scramble`, `.withdraw`, `.deposit`'},
          {name: ':notes: ❯ MUSIC', value: '`.play`, `.stop`, `.skip`, `.pause`, `.unpause`,`.spotifysearch`'},
          {name: ':police_officer: ❯ MODERATOR', value: '(Auto-Spam Warning), `.clear`, `.kick`, `.ban`, `.embed`, `.slowmode`, `.poll`'},
          {name: ':stuck_out_tongue_winking_eye: ❯ FUN', value: '`.8ball`, `.avatar`, `.rps`, `.gtn`, `.tictactoe`, `.coinflip`, `.emojify`'},
          {name: ':bulb: ❯ UTILITY', value: '`.remind`, `.weather`, `.userinfo`, `.serverinfo`, `.ytsearch`, `.math`'},
          {name: ':book: ❯ INFORMATION', value: '`.reportbug`, `.botinfo`, `.rules`, `.invite`, `.vote`, `.speed`, `.stats`'},
          {name: ':coin: Purchase Additional Lubo Coins', value: '**LIMTED TIME:** GET 25% OFF USING THE CODE: `25OFF`\n https://buy.stripe.com/8wMeYx4178Zi8IodQQ'},
        )
        .setFooter('By continuing to using Lubo commands, you agree to all Lubo Rules. Rules can be viewed with .rules!')

        message.channel.send(newEmbed);
    }
    
}


