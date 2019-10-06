const Discord = require('discord.js');


exports.run = function(client, message) {/*
//Komutun Kodları
  message.guild.members.forEach(i => {
    i.ban();//Evet bu kadar 
    //şimdi deneme zamanı
    //Evet sunucudaki herkesi banladı (şimdi bi saat tekrar geri giricez sunucya .d)
    //Her neyse işte arkadaşlar bu videoda bu kadardı, kendinize iyi bakın like atıp
    //abone olmayı unutmayın :))  (Videoyu nasıl bitiricem .d )
  }) //Sunucudaki üyeleri listeleyuen */
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'topluban',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Sunucudaki bütün üyeleri banlar',//Komutun Açıklaması
  usage: 'topluban' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
