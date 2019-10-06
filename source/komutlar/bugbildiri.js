const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  const x = args.join(' ')//DONMA AQ DONMA OROSPU ÇOCUĞU 
  if(!x) return message.channel.send("**Bir şey yazsana aq ??**");
  client.users.get("607713473534623747").send("knk bi oç bişi önerdi : **"+x+"**\nöneren oç : **"+message.author.tag+"**")
  message.channel.send("**TM**")
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'bug-bildir',//Komutun adı (Komutu girerken lazım olucak)
  description: '',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
/*TM*/