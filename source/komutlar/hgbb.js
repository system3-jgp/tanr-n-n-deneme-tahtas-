const Discord = require('discord.js');
const fs = require('fs')
exports.run = function(client, message)  {
    //Command codes
    const channel = message.mentions.channels.first()
function snd(msg){
    message.channel.send(msg)
}
let data = JSON.parse(fs.readFileSync("./data/hgbb.json", "utf-8"));
    if(!channel) return snd("**Bir kanal etiketle!**")
    if(!message.member.hasPermission("ADMINISTRATOR")) return snd("**Yetkiniz yok!**")

     data[message.guild.id] = {
         enabled:"on",
         channel:channel.id
     }
         fs.writeFile("./data/hgbb.json", JSON.stringify(data), "utf-8", (err) => {
            if(err) return console.log(err)
        })
        snd("Başarılı!")
        

}
exports.conf = {
	enabled:true,
	guildOnly:false,
	aliases:["hg-bb","hgbb"],
	permLevel:0
}
exports.help = {
	name:"giriş-çıkış",//Command name
	description:"",//Commmand description
	usage:"",//Command usage
}