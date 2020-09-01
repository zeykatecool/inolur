const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`ZS BOT`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Linkler", `Destek Sunucusu [https://discordapp.com/oauth2/authorize?client_id=736159838513659934&scope=bot&permissions=8] <a:dans:726695531299995691>`)
    .setFooter(
      `${message.author.username} tarafından istendi. |`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};

exports.help = {
  name: "desteksunucu",
  description: "yardım",
  usage: "yardım"
};
