const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("SHOP")
  .setFooter("buy something i need money")
  let theitems = Array.from(client.shopItems.values());
  for (let i = 0; i < theitems.length; i++){
    
      embed.addField(`${theitems[i].name}`, `cost: ${theitems[i].value}`)
    
  }
  message.reply({ embeds: [embed]})
}
exports.name = "shop"
exports.description = "see the items in the shop"
exports.category = "economy"