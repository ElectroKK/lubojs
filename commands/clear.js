module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    description: "This is the clear mod command",
    async execute(client, message, args, cmd, Discord, profileData) {
      if(!args[0]) return message.reply("Run this command again and enter the amount of messages you would like to clear.\nExample: `.clear 10`");
      if(isNaN(args[0])) return message.reply("Please enter a real number using digits. \nExample: `.clear 10`");
  
      if(args[0] > 500) return message.reply("You can only delete amounts under 500 messages at one time");
      if(args[0] < 1) return message.reply("You must delete at least 1 message! :rolling_eyes:");
  
      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
      });
    }
  } 