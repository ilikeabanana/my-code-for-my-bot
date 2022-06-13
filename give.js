const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  const toghetter = args.join(" ").split(", ")
  let amount = toghetter[1]
  if(!amount){
    amount = 1
  }
  if(isNaN(amount) && amount) return message.reply("send a valid amount")
  amount = Number(amount)
  let currency = ":banana:"
  const victim = message.mentions.users.first()
  if(!victim) return message.reply("bruh you gave bananas to air?")
  if(victim.id === message.author.id) return message.reply("you gave bananas yourself and got money lol")
  
    let reward = amount
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    let otherBalance = await db.get(`wallet_${victim.id}`)
    if(currentBalance < amount) return message.reply("you dont have that amount?")
    
    message.channel.send(`you gave ${reward.toLocaleString()}${currency} here you go ${victim}`)
    await db.set(`wallet_${message.author.id}`, currentBalance - reward)
    await db.set(`wallet_${victim.id}`, otherBalance + reward)
    await db.set(`stealCheck_${message.author.id}`, Date.now())
}