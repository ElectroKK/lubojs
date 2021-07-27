require('dotenv').config();

const Discord = require('discord.js');

const mongoose = require("mongoose");

const client = new Discord.Client();

const prefix = ['plz ', 'Plz '];


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Lubo Community' );

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('866471415603134465').send(`**Welcome to Lubo's Official Server, <@${guildMember.user.id}>! Try running .help in a bot channel!**`);
});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})



mongoose
    .connect(process.env.MONGODB_SRV,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(()=>{
    console.log("Connected to the Database!");
})
.catch((err) =>{
    console.log(err);
});

client.login('ODYxNzI0MDI3MjI2ODE2NTUz.YON9Cg.u7G6KBZgwSaIko8_RkFRbxOFEJM');