const profileModel = require("../../models/profileSchema");

module.exports = async(client, discord, guildmember) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        Lubi: 1000,
        bank: 0,
    });
    profile.save();

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Lubo Community' );

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('866471415603134465').send(`**Welcome to Lubo's Official Server, <@${guildMember.user.id}>! Try running .help in a bot channel!**`);
};