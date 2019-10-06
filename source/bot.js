//consts (for glitch)
// GEREKLİ YERLER
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
// GEREKLİ YERLER
// -------------------------------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
///////////////////////////////////
client.on("guildMemberAdd", member => {
let data = JSON.parse(fs.readFileSync("./data/hgbb.json", "utf-8"));
let channel = data[member.guild.id].channel;
let gk = data[member.guild.id].enabled;
if(gk!=="on") return;
const f = member.guild.channels.get(channel);
f.send(

  new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("**Birisi katıldı!**")
  .setThumbnail(member.guild.iconURL)
  .setColor('RANDOM')
  .setDescription('**'+member.guild.members.size+'** kişi olduk!')
)
})

client.on("guildMemberRemove", member => {
  let data = JSON.parse(fs.readFileSync("./data/hgbb.json", "utf-8"));
  let channel = data[member.guild.id].channel;
  let gk = data[member.guild.id].enabled;
  if(gk!=="on") return;
  const f = member.guild.channels.get(channel);
  f.send(
  
    new Discord.RichEmbed()
    .setAuthor(member.user.tag, member.user.avatarURL)
    .setTitle("**Birisi ayrıldı!**")
    .setThumbnail(member.guild.iconURL)
    .setColor('RANDOM')
    .setDescription('**'+member.guild.members.size+'** kişi kaldı.')
  )
  })
client.on("message", message => {
  const t = message.content.toLowerCase()
  if(t === "sa" || t==="sea" || t==="selamun aleyküm" || t==="selamın aleyküm" || t==="s.a"){
    let json = JSON.parse(fs.readFileSync("./data/saas.json", "utf-8"))
    let data = json[message.guild.id].saas;
    if(data==="acik"){
      message.channel.send("Aleyküm Selam, Hoşgeldin!")
      message.react("🇦");
      message.react("🇸");
    }
  }
  if(message.content.startsWith("!") || message.content.startsWith("-") || message.content.startsWith("*") || message.content.startsWith(".") || message.content.startsWith(">") || message.content.startsWith("<") || message.content.startsWith("!!")){
    let aq = JSON.parse(fs.readFileSync("./data/komutengel.json"));
    if(!aq[message.guild.id]) return
    let dd = aq[message.guild.id].enabled;
    if(dd==="yes"){
    message.delete();
    if(message.author.bot) return message.delete();
 } }
})



client.on("message", message => {
let data = JSON.parse(fs.readFileSync("./data/reklam.json", "utf-8"));
if(!data[message.guild.id]) return
let state = data[message.guild.id].enabled;
if(state!=="on") return;
if(message.member.hasPermission("BAN_MEMBERS")) return;
      const link = [".com",".edu",".biz",".tr",".eu",".tr",".org",".gg",".tk",".tf",".xyz",".ft",".k12",".ml",".rf",".gd",".bin",".it"];
      if (link.some(word => message.content.includes(word))) {
        message.delete();
        message.channel.send(
        new Discord.RichEmbed()
          .setTitle('**Hey! Dur**')
        .setDescription('**Bu sunucuda ben varken reklam yapamazsın!**')
          .setColor('RED')//CEDDİNİ GELMİŞNİ GEÇMİŞNİİ SİKEYİM BOT
        )
      }

  
})
client.on("message", message => {
  let data = JSON.parse(fs.readFileSync("./data/kufur.json", "utf-8"))
  if(!data[message.guild.id].enabled) return;
  let state = data[message.guild.id].enabled;
  if(state!=="on") return;
  
  const filtre = ["amk","aq","sq","mq","mk","aq","oç","oc","orospu çocu","çocu","amına koyam","hay aq","amcık","am","yarram","yarrak","siktir","siktir git"]
  if (filtre.some(word => message.content.includes(word))) {
message.delete()
message.channel.send("**"+message.author+" Knk küfür ediyon da ayıp değil mi aq**")

}
})
client.on("guildMemberAdd", async minder => {
  const json = JSON.parse(fs.readFileSync("./data/otorol.json", "utf-8"))//Dbden veri çekiyoruz
  const enabled = json[minder.guild.id].enabled;
  if(enabled!=="yes") return;
  const roleid = json[minder.guild.id].id;
  minder.addRole(roleid)//Deniyoruz
})

//////////////////////////////////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.login(ayarlar.token);
