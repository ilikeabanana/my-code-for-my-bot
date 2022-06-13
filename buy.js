const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  const toghetter = args.join(" ").split(", ")
  const item = toghetter[0]
  let amount = Number(toghetter[1])
  let amountfound = 0;
  if(!amount){
    amount = 1
  }
  if(isNaN(amount)) return message.reply("thats not a number")
  if(!item) return message.reply("you bought air for 0 dollars")
  currentBalance = await db.get(`wallet_${message.author.id}`)
  let theitems = Array.from(client.shopItems.values());
  for (let i = 0; i < theitems.length; i++){
    if(theitems[i].name === item){
      if(theitems[i].value * amount > currentBalance) return message.reply("BROKE YOU DONT HAVE ENOUGH MONEY")
        message.reply(`succesfully bought ${item} ${amount} times <a:peepobanana:984792632880427028>`)
      console.log(currentBalance - theitems[i].value * amount)
      db.set(`wallet_${message.author.id}`, currentBalance - theitems[i].value * amount)
      const amountofitemshegotofthat = await db.get(`${theitems[i].name}_${message.author.id}`)
      if(amountofitemshegotofthat === null || isNaN(amountofitemshegotofthat)){
        await db.set(`${theitems[i].name}_${message.author.id}`, 0)
      }
      await db.set(`${theitems[i].name}_${message.author.id}`, amountofitemshegotofthat + amount)
      amountfound = amountfound + 1;
    } else{
      console.log("no")
      console.log(item)
      console.log(theitems[i])
    }
  }
  if(amountfound === 0) return message.reply("thats not an item in the shop idiot")
}
exports.name = "buy"
exports.description = "buy an item in the shop"
exports.category = "economy"