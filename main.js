const keepAlive = require('./server.js');
require('dotenv').config();

const Discord = require('discord.js');

const mongoose = require("mongoose");

const client = new Discord.Client();



const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

const TicTacToe = require('discord-tictactoe')

new TicTacToe({
  language: 'en', command: '.ttt'
}).attach(client)

new TicTacToe({
  language: 'en', command: '.tictactoe'
}).attach(client)

let AS = {}; //Anti-Spam

const timeAS = 5; //5 seconds
const msgsAS = 4; //3 messages

//you will be allowed to send 3 messages in 5 seconds every message after that for the rest of the 5 seconds will be deleted.

client.on('message', async(message) => {
    if(message.author.bot || !message.guild) return;
    if(!AS[message.author.id]) AS[message.author.id] = {};
    if(!AS[message.author.id][message.guild.id]) AS[message.author.id][message.guild.id] = 1, setTimeout(() => {delete AS[message.author.id][message.guild.id]}, timeAS * 1000);
    else if(AS[message.author.id][message.guild.id] < msgsAS) AS[message.author.id][message.guild.id]++;
    else if(AS[message.author.id][message.guild.id] >= msgsAS) await message.delete(), message.reply(`Don't spam!`).then(e => e.delete({ timeout: 5000 }));
    else AS[message.author.id] = {}, AS[message.author.id][message.guild.id] = 1
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
// client.on('messageUpdate', async(oldMessage,newMessage)=>{
//   require('./events/guild/messageUpdate')(oldMessage,newMessage)
// })
// client.on('messageDelete', async(message)=>{
//   require('./events/guild/messageDelete')(message)
// })
client.login(process.env.token);