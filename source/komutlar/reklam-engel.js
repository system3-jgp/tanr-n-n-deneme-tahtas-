const Discord = require('discord.js');
const fs = require('fs')
exports.run = function(client, message, args)  {
	//Command codes
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Bu işlem için yeterli iznin yok!**")
	const fgf = args.join(' ');
	if(!fgf) return message.channel.send("`!reklam-engel aç` veya `!reklam-engel kapat`")
	let data = JSON.parse(fs.readFileSync("./data/reklam.json", "utf-8"))
	if(fgf==="aç"){
data[message.guild.id] = {
	enabled:"on"
}
message.channel.send("**Başarı  ile açtım!**")
	}else if(fgf==="kapat"){
data[message.guild.id] = {
	enabled:"off"
	}	
	message.channel.send("**Başarı  ile kapattım!**")
}
fs.writeFile("./data/reklam.json", JSON.stringify(data), "utf-8", (err) => {
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
	name:"reklam-engel",//Command name
	description:"",//Commmand description
	usage:"",//Command usage
}