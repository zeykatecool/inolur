const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('z!seviye','Seviyenizi atar.')
.addField('z!seviye-ayarlar','seviye komutlarının sunucudaki ayarlarını atar.')
.addField('z!seviye-aç','Seviye Sistemini açarsınız.')
.addField('z!seviye-kapat','Seviye sistemini kapatırsınız.')
.addField('z!seviye-log','Level atlayan kullanıcıları bu kanala atar.')
.addField('z!seviye-rol','Seviye ödülünü ayarlarsınız.')
.addField('z!seviye-xp','mesaj başına gelecek puanı ayarlarsınız.')
.setFooter('ZS Seviye Sistemi.')
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
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};