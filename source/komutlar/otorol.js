const Discord = require('discord.js');
const fs = require('fs')
exports.run = function(client, message, args)  {
	//Command codes
	const role = message.mentions.roles.first();
	if(!role) return message.channel.send("**Bir rol etiketleyin!**")
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Bu işlem için yetkiniz yok!**")
			let data = JSON.parse(fs.readFileSync("./data/otorol.json", "utf-8"))
		data[message.guild.id] = {
			enabled:"yes",
			id:role.id
		}
		fs.writeFile("./data/otorol.json", JSON.stringify(data), "utf-8", (err) => {
if(err) return console.log(err)
		})
		message.channel.send("**Otorol başarı ile "+role+" olarak ayarlandı!**")
}//Burdan onların aq
exports.conf = {
	enabled:true,
	guildOnly:false,
	aliases:[],
	permLevel:0
}
exports.help = {
	name:"otorol",//Command name
	description:"Otorol ayarlarsınız",//Commmand description
	usage:"otorol @Role",//Command usage
}