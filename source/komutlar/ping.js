const Discord = require('discord.js');


exports.run = function(client, message) {

const ping = client.ping;
message.channel.send(
new Discord.RichEmbed()
  //Embed giriş
  .setTitle('Bot Ping')//Başlık
  .setDescription('```'+ping+'```')//Orta kısım (Açıklama)
  .setColor('RANDOM') //RENK - RANDOM yaparsanız renkleri rastgele atar.
  .setFooter('Bot ping sistemi'/*en alt kısımda yazıcak yazı*/ , message.author.avatarURL/*Mesajı gönderenin ppsi*/)//En alt kısım
//Embed bitiş
)
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ping',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Botun pingini gösterir',//Komutun Açıklaması
  usage: 'ping' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
