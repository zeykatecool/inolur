const Discord = require('discord.js');

const prosoyguncu = [
  "85 Türk Lirası Soydun :man_frowning: :chart_with_downwards_trend:",
  "10 Türk Lirası Soydun :man_frowning: :chart_with_downwards_trend:",
  "Ahhaa Polise Yakalandın. :man_frowning: :chart_with_downwards_trend:",
  "1 Türk Lirası Soydun :man_frowning: :chart_with_downwards_trend:",
  "120 Türk Lirası Soydun :man_frowning: :chart_with_downwards_trend:",
  "250 Türk Lirası Soydun  :man_frowning: :chart_with_downwards_trend:",
  "800 Türk Lirası Soydun! :man_frowning: :chart_with_downwards_trend:",
  "950 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "1.000 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "2.500 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "1.485 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "7.850 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "24.657 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "89.652 Türk Lirası Soydun :man_tipping_hand: :chart_with_upwards_trend:",
  "278.545 Türk Lirası Soydun :money_mouth: :chart_with_upwards_trend:",
  "578.546 Türk Lirası Soydun :money_mouth: :chart_with_upwards_trend:",
  "875.135 Türk Lirası Soydun :money_mouth: :chart_with_upwards_trend:",
  "205.598 Türk Lirası Soydun :money_mouth: :chart_with_upwards_trend:",
  "975.124 Türk Lirası Soydun :man_tipping_hand: :moneybag: ",
  "356.451 Türk Lirası Soydun :man_tipping_hand: :moneybag:",
  "VURGUN!1.000.0000 Türk Lirası Soydun! :regional_indicator_p: :regional_indicator_a: :regional_indicator_r: :regional_indicator_a: ",
];

exports.run = function(client, message) {
//Komutun Kodları
const soyguncu = prosoyguncu[Math.floor(Math.random() * prosoyguncu.length)];
  message.channel.send(
  
  "**Soyguna hazırlanılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Soyguna gidiliyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Soygun Yaptın!**')
    .setDescription('---------')
      .addField('**Soyulan Para: **',soyguncu)
    .setColor('GREEN')
    
    //Efe Tarafından Kodlanmıştır Lütfen Çalmayınız.
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['soygun'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'soygunyap',//Komutun adı (Komutu girerken lazım olucak)

  description: 'Soygun Yaparsınız',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'soygunyap' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}