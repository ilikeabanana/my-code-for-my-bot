const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  const toghetter = args.join(" ").split(", ")
  const item = toghetter[0]
  let amount = Number(toghetter[1])
  
  if(!amount){
    amount = 1
  }
  if(isNaN(amount)) return message.reply("non valid number")
  let theitems = Array.from(client.shopItems.values());
  for (let i = 0; i < theitems.length; i++){
    const amountofitemshegotofthat = await db.get(`${theitems[i].name}_${message.author.id}`)
      if(amountofitemshegotofthat === null || isNaN(amountofitemshegotofthat)){
        await db.set(`${theitems[i].name}_${message.author.id}`, 0)
      }
    if(theitems[i].name === item){
      if(amountofitemshegotofthat === 0) return message.reply("AYO YOU DONT HAVE THAT")
      if(amountofitemshegotofthat < amount) return message.reply("you dont have that much")
      await db.set(`${theitems[i].name}_${message.author.id}`, amountofitemshegotofthat - amount)
      const currentBalance = await db.get(`wallet_${message.author.id}`)
      await db.set(`wallet_${message.author.id}`, currentBalance + theitems[i].value * amount)
      message.reply(`succesfully sold ${theitems[i].name} ${amount} times`)
    }
  }
}
exports.name = "sell"
exports.description = "sell an item in your inventory"
exports.category = "economy"