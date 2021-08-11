const profileModel = require("../../models/profileSchema");

module.exports = async(client, Discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        lubi: 1000,
        bank: 0,
    });
    profile.save();

  
};