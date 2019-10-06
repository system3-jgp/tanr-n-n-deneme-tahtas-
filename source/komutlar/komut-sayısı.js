const Discord = require('discord.js');


exports.run = function(client, message) {
//Komutun Kodları
  const sayı = client.commands.size;
  message.channel.send(
  new Discord.RichEmbed()
    .setTitle(client.user.tag+' | Komut sayısı')
    .setDescription('**Bu botta toplam __'+sayı+'__ komut var!**')
    .setColor('RANDOM')
    .setThumbnail(client.user.avatarURL)
  )
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'komut-sayı',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Komut sayısın gösterir',//Komutun Açıklaması
  usage: 'komut-sayısı' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
