
const Discord = require('discord.js');
//ÇALIŞSANA AQ

exports.run = function(client, message) {

  var random = Math.floor(Math.random()*(100-0+1)+0);
  var c = ""
  if(random > 90) {
    var c = "Naptın sen bea"
  }
  if(random < 10){
    var c = "Terk et burayı"
  }
  if(random === 50){
    var c = "İdare eder."
  }
  if(random === 31){
    var c = "."
  }
  if(random === 62){
    var c = "-.-"
  }
  if(random > 50){
    var c = ":rolling_eyes:"
  }
  if(random < 50){
    var c = "Eh işte"
  }
  message.channel.send(
  new Discord.RichEmbed()
    .setTitle('Bakıyorum hemn')
    .setDescription('Tam olarak **'+random+'** cm! \n **'+c+'**')
    .setColor('RANDOM')
    .setFooter('MUck')
  )
//Komutun Kodları
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kaçcm',//Komutun adı (Komutu girerken lazım olucak)
  description: 'KAÇCM',//Komutun Açıklaması
  usage: 'usage ' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
