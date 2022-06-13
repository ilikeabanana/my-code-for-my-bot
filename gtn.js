const Database = require("@replit/database")
const db = new Database()
exports.run = async(client, message, args) => {
  let max = args.join(" ")
  if(!args) max = 10;
  if(!max) max = 10;
  if(isNaN(args)) max = 10;
  let chancesleft = 10;
  let getsbananas = false
  if(max >= 1000){
    chancesleft = 25
    getsbananas = true
  }
  let currentBalance = await db.get(`wallet_${message.author.id}`)
  const randomnumber = Math.floor(Math.random() * max)
  console.log(randomnumber)
  message.reply(`choose a number between 0 and ${max}, you have ${chancesleft} chances`)
  let guywhousedit = message.author.id
  client.on('messageCreate', async message => {
    if(message.author.id === guywhousedit){
      if(chancesleft <= 0) { message.reply(`you lost the number was ${randomnumber.toString()}`); return guywhousedit = "0";}
      if(isNaN(message.content)) return message.reply("THATS NOT A NUMBER")
      if(message.content === randomnumber.toString()){
        message.reply("YOU GUESSED IT GG")
        guywhousedit = "0"
        if(getsbananas === true){
          await db.set(`wallet_${message.author.id}`, currentBalance + max / 10)
        }
      } else {
        if(Number(message.content) > randomnumber) {chancesleft = chancesleft - 1; return message.reply(`to high you have ${chancesleft.toString()} left`);}
        if(Number(message.content) < randomnumber) {chancesleft = chancesleft - 1; return message.reply(`to low you have ${chancesleft.toString()} left`);}
      
      }
    }
  })
}