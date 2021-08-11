const keepAlive = require('./server.js');
require('dotenv').config();

const Discord = require('discord.js');

const mongoose = require("mongoose");

const client = new Discord.Client();

const prefix = ['plz ', 'Plz '];


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


keepAlive();
client.login(process.env.token);