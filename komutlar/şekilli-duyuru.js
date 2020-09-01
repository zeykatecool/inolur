const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Doğru Kullanım: z!sunucutanıt `Sunucu Linkiniz` '));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
  .setDescription('Sunucunuz başarıyla ZS Destek Sunucusunda tanıtıldı! İyi GÜNLER')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Sunucu", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('747729203016761454').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sunucutanıt',
  description: 'Sunucunuzu Tanıtırsınız!',
  usage: 'sunucutanıt <SunucuLinkiniz>'
};