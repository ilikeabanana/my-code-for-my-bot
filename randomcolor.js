const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  var symbols,color;
  symbols = "0123456789ABCDEF"
  color = "#";
  for(var i =0;i<6;i++){
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  const embed = new Discord.MessageEmbed()
  .setTitle(`color is: ${color}`)
  .setColor(color)
  message.channel.send({embeds:[embed]})
}
exports.name = "randomcolor"
exports.description = "get a random color"
exports.category = "fun"