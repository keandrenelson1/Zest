// Dependencies:
const {MessageEmbed} = require('discord.js');
const {success} = require('../../utils/emojis.json');
const {oneLine} = require('common-tags');
// Command Require:
const Command = require('../Command.js');

// Command Definition:
module.exports = class SetAutoBanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setautoban',
            aliases: ['setab', 'sab'],
            usage: 'setautoban <warn count>',
            description: oneLine`
        Sets the amount of warns needed before Any Bot will automatically ban someone from your server.
        Provide no warn count or a warn count of 0 to disable \`auto ban\`.
      `,
            type: client.types.ADMIN,
            userPermissions: ['MANAGE_GUILD'],
            examples: ['setautoban 3']
        });
    }

  // Command Code:
  run(message, args) {

        // Check for warn count:
        const autoBan = message.client.db.settings.selectAutoBan.pluck().get(message.guild.id) || 'disabled';
        const amount = Number(args[0]);
        // Check if warn count is a number:
        if (amount && (!Number.isInteger(amount) || amount < 0))
            return this.sendErrorMessage(message, 0, 'Please enter a positive integer');

        // Send embed:
        const embed = new MessageEmbed()
            .setTitle('Settings: `System`')
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .setDescription(`\`Auto ban\` was successfully updated. ${success}`)
            .setFooter({text: message.member.displayName, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);

        // Clear if no args provided
        if (args.length === 0 || amount === 0) {
            message.client.db.settings.updateAutoBan.run(null, message.guild.id);
            return message.channel.send({embeds: [embed.addField('Auto Ban', `\`${autoBan}\` ➔ \`disabled\``)]});
        }

        // Update warn count:
        message.client.db.settings.updateAutoBan.run(amount, message.guild.id);
        return message.channel.send({embeds: [embed.addField('Auto Ban', `\`${autoBan}\` ➔ \`${amount}\``)]});
    }
};
