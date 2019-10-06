const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  //Kullanıcıdan veriyi çektik
  const channel = message.mentions.channels.first()
  const x = args.slice(2).join(' ')
  if(!channel) return message.channel.send({embed:{title:"Hata",description:"Hangi kanalda oylama yapmam lazım?"}, color:0xff0000})
  if(!x) return message.channel.send({embed:{title:"Hata",description:"Lütfen neyi oylamam gerektiğini yaz?"},color:0xff0000})
  channel.send(
  new Discord.RichEmbed()
    .setTitle('Oylama')
    .setDescription(x)
    .setColor('RANDOM')
  ).then(function(r){
         r.react('☑')
    r.react('🚫')
         })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'oylama',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Oylama işte bea',//Komutun Açıklaması
  usage: 'oylama #kanal <yarın video çekem mi>' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
