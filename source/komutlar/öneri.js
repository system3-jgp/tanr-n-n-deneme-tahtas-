const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  const öneri = args.join(' ');
  if(!öneri) return message.channel.send('**Ne önereceğim**');
  const oneri_kanal = client.channels.get('605776246625796116');
  oneri_kanal.send(
  new Discord.RichEmbed()
  .setTitle('Bir öneri var')
    .setDescription('**Öneri**:'+öneri+'\n **Öneren**:'+message.author.tag+'\n**Komut kullandığı sunucu ** : '+message.guild.name)
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
  )
  message.channel.send('**Öneriniz başarı ile alındı!**')
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'öneri',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Önerdiğiniz komutu önerirsiniz.',//Komutun Açıklaması
  usage: 'öneri öneri komut' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
