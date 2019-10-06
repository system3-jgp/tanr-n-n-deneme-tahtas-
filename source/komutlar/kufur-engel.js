const Discord = require('discord.js');
const fs = require('fs');
exports.run = function(client, message, args)  {
	//Command codes
let data = JSON.parse(fs.readFileSync("./data/kufur.json", "utf-8"));
const g_ = args.join(' ');
if(!g_) return message.channel.send("**`!küfür-engel aç` veya `!küfür-engel kapat`**")
if(!message.member.hasPermission("ADMINISTRATOR")) return messsage.channel.send("**Üzgünüm, bunu yapamazsın**")	
if(g_==="aç"){
data[message.guild.id] = {
	enabled:"on"
}
message.channel.send("**Başarı ile açtım!**");
}else if(g_ ==="kapat"){
data[message.guild.id] = {
	enabled:"off"
}
message.channel.send("**Başarı ile kapattım!**");
}
fs.writeFile("./data/kufur.json", JSON.stringify(data), "utf-8", (err) => {
	if(err) return console.log(err)
})


}
exports.conf = {
	enabled:true,
	guildOnly:false,
	aliases:[],
	permLevel:0
}
exports.help = {
	name:"küfür-engel",//Command name
	description:"Küfür engel işte mq",//Commmand description
	usage:"küfür-engel",//Command usage
}