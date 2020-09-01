const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Kayıt Komutları')
.setTimestamp()
.addField('z!kayıt','Mevcut Kanal Kayıtını Gösterir.')
.addField('z!kayıt-rol','Kayıt Rolünü Belirlersiniz.')
.addField('z!kayıt-log','Kayıt Log Kanalını Belirlersiniz.')
.addField('z!kayıt-kanal','Kayıt Kanalını Belirlersiniz.')
.setFooter('ZS Kayıt Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};