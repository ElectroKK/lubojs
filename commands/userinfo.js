const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
  aliases: ['infouser'],
  permissions: [],
  description: "displays user info",
  execute(client, message, args, cmd, Discord, profileData) {
    const { MessageEmbed } = require('discord.js')
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const role = user.roles.cache.map(role => role.toString()).join(" ,") || "Too Many Roles To Show"


        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}\'s stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: 'Avatar: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ") || "Too Many Roles To Show",
                    inline: false
                }
            )

 const embed2 = new MessageEmbed()
            .setTitle(`${user.user.username}\'s stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `${user.user.username} isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: 'Too many roles to show',
                    inline: false
                }
            )

        message.channel.send(embed)
    }
}