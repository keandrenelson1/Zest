// Dependencies:
const {MessageEmbed} = require('discord.js');
const axios = require('axios');
// Command Require:
const Command = require('../Command.js');

// Command Definition:
module.exports = class AstronomyPictureCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'astronomypicture',
            usage: 'astronomypicture',
            aliases: ['ap', "apod"],
            description: 'Gives you a picture of the day from NASA\'s Astronomy Picture of the Day',
            type: client.types.FUN,
        });
    }

    // Command Code:
    async run(message, args) {
        // Get the Api Key:
        const apiKey = message.client.apiKeys.nasaapi
        // Get the Astronomy Picture of the Day:
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        // Make the Request:
        await axios.get(url).then(async res => {
            // Create the Embed:
            const embed = new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setTitle(res.data.title)
                .setURL(res.data.hdurl)
                .setDescription(res.data.explanation)
                .setImage(res.data.url)
                .setTimestamp()
                .setFooter(`Picture obtained from NASA`, "https://th.bing.com/th/id/R.2dc26db54c900a62823c43ada37aef21?rik=M7s8OgqyGQQ92A&riu=http%3a%2f%2fwww.panoramaaudiovisual.com%2fen%2fwp-content%2fuploads%2f2016%2f02%2fNASA-Tv.jpg&ehk=VOIBszxNG0BRcksK%2fASlnx%2flFDbYje9PdznIEDBBfeo%3d&risl=&pid=ImgRaw&r=0");
            // Send the Embed:
            return message.channel.send(embed);
        }).catch(err => {
            // If the Request Failed:
            return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        });
    }
};
