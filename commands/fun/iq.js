const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'iq',
        description: 'Shows your IQ',
        aliases: ["iq"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
         try {

    const iq = Math.floor(Math.random() * 226);
    const embed = new MessageEmbed()

    .setTitle(":brain: IQ Test:")
    .setDescription(`:bulb:   ${user}'s  **IQ is:**   \`${iq}\`  `)
    .setColor("FF0000")
    .setThumbnail("https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy.gif")
    .setTimestamp()
    .setFooter('© Karma', 'https://cdn.discordapp.com/attachments/725019921159028808/739770316754256012/Screenshot_20200803-1459592.png')
    .setColor(config.embedcolor);
    message.channel.send(embed);

        } catch (err) {
    message.channel.send({embed: {
      color: `${config.embedcolor}`,
      description: `${client.emotes.error} Something went wrong...`
    }})
  }
    }
}

