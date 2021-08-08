const Discord = require('discord.js'); // defining Discord


module.exports = {
    name: "spotifysearch",
    aliases: ['spot', 'spotify', 'spotsearch', 'ssearch', 'spsearch', 'searchspotify', 'songsearch', 'song'],
    description: 'Search for a song on spotify',

    async execute(client, message, args, cmd, Discord, profileData){
        let msglink = args.join('%20') // we're joining the args using %20, so if the args are Hello World it would be Hello%20World
        let msg = args.join(' ') // we're joining the args using a space. If you don't have the space Hello World would be HelloWorld

if(!args[0]) return message.channel.send('Please give me a song name to search') // if there is not args[0] stop reading the code and send that message.

        let embed = new Discord.MessageEmbed() // making the embed
        .setColor('GREEN')
        .setTitle('Click the link for Spotify Results:')
        .setDescription(`[${msg}](https://open.spotify.com/search/${msglink})`) // this is how you make a hyperlink ONLY IN DESCRIPTIONS [message](link), the ${} is used to call a variable in a string. You can only use it when using backticks.

        message.channel.send(embed) // sending the embed
    }
}