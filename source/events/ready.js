const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
   var oyun = [
        client.users.size+" kullanıcı",
     "Bu iş böyle giderse yarınımız yok",
     client.guilds.size+" sunucu",
     "#YeniBirBaşlangıç",
     prefix+"yardım | Komutları Görüntüleyin"

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame("https://youtube.com "+prefix);
        }, 2 * 2500);
}