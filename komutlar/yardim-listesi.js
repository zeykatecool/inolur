const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Komut Listesi")
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      "**•** **z!yetkili** Sunucuyu yönetmek için gerekli olan komutlar.\n**•** **z!eğlence** Eğlenmek için bulunan komutlar.\n**•** **z!kullanıcı** Kullanıcılar için komutlar.\n**•** **z!bot** Bot ile alakalı komutları görürsünüz.\n**•** **z!tümkomutlar** Botda bulunan neredeyse tüm komutları gösterir.\n"
    )
    .addField(
      "» Linkler",
      `Bot Davet Linki(https://discordapp.com/oauth2/authorize?client_id=736159838513659934&scope=bot&permissions=8)` +
        "**\n**" +
        `Bota Oyver(YAKINDA)` +
        "**\n**" +
        `Destek Sunucusu(https://discord.gg/zAsXTSe)`,
      false
    )
    .setFooter("ZS | Yardım Komutları");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
