const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  let victim = message.mentions.users.first()
  if(!victim) victim = message.author
  console.log(victim)
  let balance = await db.get(`wallet_${victim.id}`)
  let bank = await db.get(`bank_${victim.id}`)

  if(balance === null) balance = 0
  if(bank === null) bank = 0
  let currency = "<:banana:984792958530387979> "
  let moneyEmbed = new Discord.MessageEmbed()
  .setTitle(`${victim.username}'s balance`)
  .setDescription(`Wallet:${balance}${currency} Bank:${bank}${currency}`)
  .setThumbnail(victim.displayAvatarURL({dynamic: true}))
  .setColor("YELLOW")
  if (typeof await db.get(`wallet_${victim.id}`) === 'string'){
    db.set(`wallet_${victim.id}`, Number(balance))
    console.log("done")
  }
  message.channel.send( { embeds : [ moneyEmbed ] } )
  
}
exports.name = "balance"
exports.description = "see how much bananas you have"
exports.category = "economy"