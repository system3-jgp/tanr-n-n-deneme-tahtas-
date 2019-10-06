const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  //Kodumuz bu olsun mesela
  //Deneyelim
  //Şu an herkes kullaabiliyor komutu. biz bunu sadece id sini girdiğimiz kişinin kullanıcağı gibi ayarlayacağız.
  if(message.author.id !== "560166995551715346") return message.channel.send('**Bu komutu sadece sahibim kullanabilir!**');//Böyle yapalım
  if(!args.join(' ')) return message.channel.send('**Ne yazacağımımıda yaz!**');
  message.delete();
  message.channel.send(args.join(' '));
  //Bu videoda bu kadar arkadaşlar (komut fikri önerirseniz sevinirm) Dislike değilde like atarsanız sevinirim (Geçen videoda niye 4 dislike vardı acb ? ) Neyse kendnize iyi bakın arkadaşlar ♥ 
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'yaz',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Yazdırdığınız şeyti bota yazdırır.',//Komutun Açıklaması
  usage: 'yaz [İçerik]' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
