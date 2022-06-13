const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  let victim = message.mentions.users.first()
  if(message.author.id !== "879990618519117884") return
  if(!victim) return message.reply("who needs money?")
  let amount = args[1]
  currentBalance = await db.get(`wallet_${victim.id}`)
  if(isNaN(amount)) return message.reply("invalid number")
  message.reply(`removed ${amount}\<:banana:984792958530387979>  to ${victim}'s wallet sad`)
  number = Number(amount)
  await db.set(`wallet_${victim.id}`, currentBalance - number)
}
exports.name = "remove"
exports.description = "removes bananas to mentioned user"
exports.category = "ownerOnly"