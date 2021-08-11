const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: 'rps',
    aliases: ['rockpaperscissors'],
    permissions: [],
    description: "This is the rock paper scissors command",
    async execute(client, message, args, cmd, Discord, profileData) {
  let embed = new MessageEmbed()
		.setTitle("Rock Paper Scissors Game")
		.setDescription("React to play!")
    .setColor('RANDOM')
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("🪨")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🪨', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🪨', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new MessageEmbed()
            .setColor('RANDOM')
        		.setTitle("Result")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
			await msg.edit(result)
        		if ((me === "🪨" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🪨") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("HA LOSER, you lost!");
            } else if (me === reaction.emoji.name) {
                return message.reply("Grrrrr, it's a tie!");
            } else {
                return message.reply("Hmf, you won! REMATCH ME!");
            }
        })
        .catch(collected => {
                message.reply('Process has been cancelled since you did not respond in time!');
            })
}
}