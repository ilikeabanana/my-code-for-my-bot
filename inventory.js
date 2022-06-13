const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("INVENTORY")
  .setFooter("thats all the items :/")
  let victim = message.mentions.users.first()
  if(!victim) victim = message.author
  let theitems = Array.from(client.shopItems.values());
  for (let i = 0; i < theitems.length; i++){
    const amountofitemshegotofthat = await db.get(`${theitems[i].name}_${victim.id}`)
      if(amountofitemshegotofthat === null || isNaN(amountofitemshegotofthat)){
        await db.set(`${theitems[i].name}_${victim.id}`, 0)
      }
    if(amountofitemshegotofthat !== 0 || amountofitemshegotofthat !== null){
      embed.addField(`${theitems[i].name}`, `${amountofitemshegotofthat}`)
    }
  }
  message.reply({ embeds: [embed]})
}
exports.name = "inventory"
exports.description = "view ur items"
exports.category = "economy"