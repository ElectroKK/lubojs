module.exports = {
    name: 'botemotes',
    aliases: [],
    permissions: [],
    description: "This is the command where people can get info on Lubo",
    execute(client, message, args, cmd, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Emojis')
        .setDescription('<:Lubi_statue:876888954014679121>\n`<:Lubi_statue:876888954014679121>`\n<a:Wumpus_badge:876849177542393856>\n`<a:Wumpus_badge:876849177542393856>`\n<:bot:876850640352071720>\n`<:bot:876850640352071720>`\n<:electro_badge:876850371199397928>\n`<:electro_badge:876850371199397928>`\n<:heads1234:876839641729368084>\n`<:heads1234:876839641729368084>`\n<:lubo:876889270319743047>\n`<:lubo:876889270319743047>`\n<:lubo_coin:876850257655365642>\n`<:lubo_coin:876850257655365642>`\n<a:lubo_crown:876851074705788981>\n`<a:lubo_crown:876851074705788981>`\n<:lubo_crown2:876851542299390052>\n`<:lubo_crown2:876851542299390052>`\n<a:lubo_heart:876889006812581908>\n`<a:lubo_heart:876889006812581908>`\n<a:lubo_trophy:876848295480279110>\n`<a:lubo_trophy:876848295480279110>`\n<a:pepe_head:876889159711731712>\n`<a:pepe_head:876889159711731712>`\n<:tails1234:876839298605920306>\n`<:tails1234:876839298605920306>`')
        .addFields()
        .setFooter('Lubo does not own the rights to any of these emotes');

        message.channel.send(newEmbed);
    }
    
}