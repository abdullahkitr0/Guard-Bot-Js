const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Body Guard BOT`)
.setDescription(`

:white_small_square: **=**  \`bg!yavaş-mod\` : **Yavaşmod süre**
:white_small_square: **=**  \`bg!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`bg!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`bg!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`bg!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`bg!kick\`: **Belirttiğiniz Kişiyi Sunucudan Atarsınız**
:white_small_square: **=**  \`bg!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`bg!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`bg!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`bg!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`bg!sohbet-aç\` :  **Sohbeti Açabilirsiniz.**
:white_small_square: **=**  \`bg!sohbet-kapat\` :  **Sohbeti  Kapatabilirsiniz.**

`)
.setImage("https://i.hizliresim.com/a7pqTM.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};