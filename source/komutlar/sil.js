const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  const miktar  = args.join(' ');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Yetkiniz yok!**');
  if(!miktar) return message.channel.send('**Lütfen bir miktar yazın**')
  if(isNaN(miktar)) return message.channel.send('**Lütfen yazı değil sayı yazın!**')
  message.channel.bulkDelete(miktar);
  message.channel.send('**Başarı ile __'+miktar+'__ adet mesajı sildim! Bu mesaj 5 saniye içinde yok olucak**').then( n=> n.delete(5000))
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'sil',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Belirlediğiniz miktarda mesajı siler',//Komutun Açıklaması
  usage: 'sil 100' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
