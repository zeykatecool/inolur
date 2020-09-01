const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "499092248164827138") return message.reply(':no_entry: Sahibim Sen Değilsin');
   message.channel.send('İstediğin Sunucudan Ayrıldım Babuş');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};