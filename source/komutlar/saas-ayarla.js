const Discord = require('discord.js');
const fs = require('fs');
exports.run = function(client, message, args) {
	//Command codes
	const islem = args.join(' ');
	let data = JSON.parse(fs.readFileSync("./data/saas.json", "utf-8"));
	if(!islem) return message.channel.send("**Yapmak istediğiniz işlemi girin!\n`!saas aç` veya `!saas kapat`**")
	if(islem==="aç"){
		data[message.guild.id] = {
			saas:"acik"
		}
		
		message.channel.send("**Başarı ile açtım!**");
	}
	else if(islem==="kapat"){
		data[message.guild.id] = {
			saas:"kapali"
		}
		message.channel.send("**Başarı ile kapattım!**")//Evet videoyu devam ettirmeyi unutmuşum

	}//Bir daha hata çıkmasın lütfen...

			fs.writeFile("./data/saas.json", JSON.stringify(data), "utf-8", (err) => {
			if(err) return console.log("İşlemi gerçekleştirirken bir hata oluştu : "+err)
		})
		};
exports.conf = {
	enabled:true,
	guildOnly:false,
	aliases:['sa-as'],
	permLevel:0
}
exports.help = {
	name:"saas",//Command name ee hadi aq
	description:"Sa as ayarlar",//Commmand description
	usage:"saas",//Command usage
}