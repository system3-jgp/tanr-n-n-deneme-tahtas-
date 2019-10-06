const Discord = require('discord.js');
const fs = require('fs')
exports.run = function(client, message, args)  {
	//Command codes
	let data = JSON.parse(fs.readFileSync("./data/komutengel.json", "utf-8"));
	const ss = args.join(' ');
	if(!ss) return message.channel.send("**`!komut-engel aç` veya `komut-engel kapat`**")
		if(ss==="aç"){
			data[message.guild.id] = {
				enabled:"yes"
			}
			 message.channel.send("**Başarı ile açtım!**")
}else if(ss==="kapat"){
	data[message.guild.id] = {
		enabled:"no"
	}
 message.channel.send("**Başarı ile kapattım!**")
}
fs.writeFile("./data/komutengel.json", JSON.stringify(data), "utf-8", (err) => {
	if(err) return console.log(err)
})

	};
exports.conf = {
	enabled:true,
	guildOnly:false,
	aliases:[],
	permLevel:0
}
exports.help = {
	name:"komut-engel",//Command name
	description:"Komut engel ayarlar",//Commmand description
	usage:"komut-engel aç",//Command usage
}