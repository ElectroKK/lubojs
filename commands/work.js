const profileModel = require("../models/profileSchema");

module.exports = {
    name: "work",
    aliases: ['wk', 'w'],
    permissions: [],
    cooldown: 3600,
    description: "work for some coin!",
    async execute(client, message, args, cmd, Discord, profileData) {

        const locations = [
            "82746",
            "92435",
            "57245",
            "19284",
            "29348",
            "01928",
            "34929",
            "71274",
            "60138",
            "50294",
            "89812",
            "12539",
            "77019",
            "69069",
            "42043"
        ];

        const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

        const filter = ({ author, content }) => message.author == author && chosenLocations.some((location) => location.toLowerCase() == content.toLowerCase());
        
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 25000 });

        const earnings = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;


        collector.on('collect', async (m) => {
            message.channel.send(`You worked extremely hard at work earning you ℒ ${earnings}`);

            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        lubi: earnings,
                    },
                }
            );
        });

        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                message.channel.send('You ran out of time! Have fun waiting 1h');
            }
        });


        message.channel.send(`<@${message.author.id}> Below are a few number phrases\n Type 1 of them exactly:\n \`${chosenLocations.join('` `')}\``);
    }
}