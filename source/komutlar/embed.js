const Discord = require('discord.js');


exports.run = function(client, message) {
//Komutun Kodları
message.channel.send(new Discord.RichEmbed()
.setTitle("Başlık")
.setDescription("Açıklama")
.setColor("GREEN").setThumbnail(""+client.user.avatarURL+"")
.setImage(""+client.user.avatarURL+"")
.addField("a", "b", true)
.addField("a", "b", true)
.addField("a","b", true)
.addField("a","b", true))
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'embed',//Komutun adı (Komutu girerken lazım olucak)
  description: '',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
