const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  const toghetter = args.join(" ").split(", ")
  const item = toghetter[1]
  
  const commandName = toghetter[0]
  if(!commandName) return message.reply("please say an item")
  const command = client.shopItems.get(commandName)
  console.log(commandName)
  console.log(command)
  const amountofitemshegotofthat = await db.get(`${command.name}_${message.author.id}`)
      if(amountofitemshegotofthat === null || isNaN(amountofitemshegotofthat)){
        await db.set(`${command.name}_${message.author.id}`, 0)
      }
  if(amountofitemshegotofthat === 0) return message.reply("AYO YOU DONT HAVE THAT")
  if(amountofitemshegotofthat === null) return message.reply("AYO YOU DONT HAVE THAT")
  db.set(`${command.name}_${message.author.id}`, amountofitemshegotofthat - 1)
  if(!command) return message.reply("this is not a valid item")
  if(!command.run) return message.reply("this item cannot be used")
    
  command.run(client, message, item)
}