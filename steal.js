const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  const toghetter = args.join(" ").split(", ")
  let amount = toghetter[1]
  if(!amount){
    amount = 1000
  }
  if(isNaN(amount) && amount) return message.reply("send a valid amount")
  amount = Number(amount)
  if(amount < 1000) return message.reply("must be atleast 1000")
  if(amount > 10000) return message.reply("max 10000")
  let currency = ":banana:"
  const victim = message.mentions.users.first()
  if(!victim) return message.reply("bruh you stole from air?")
  if(victim.id === message.author.id) return message.reply("you stole from yourself and got money lol")
  const check = await db.get(`stealCheck_${message.author.id}`);
  const timeout = 3600000;
  if(check !== null && timeout - (Date.now() - check) > 0 && message.author.id !== "879990618519117884") {
    const ms = require("pretty-ms")
    const timeleft = ms(timeout - (Date.now() - check))
    message.channel.send(`You have already stole come back after ${timeleft}`)
  } else {
    let reward = amount
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    let otherBalance = await db.get(`wallet_${victim.id}`)
    if(otherBalance < amount) return message.reply("not worth it he is broke")
    const random = Math.floor(Math.random() * 100)
    console.log(random)
    if(random > 70){
      message.reply("HE CAUGHT YOU, YOU OWE HIM THE AMOUNT YOU WANTED TO STEAL")
      if(currentBalance < reward){
        message.reply("there goes your bananas")
        await db.set(`wallet_${message.author.id}`, 0)
        await db.set(`wallet_${victim.id}`, otherBalance + currentBalance)
      }else{
        await db.set(`wallet_${message.author.id}`, currentBalance - reward)
        await db.set(`wallet_${victim.id}`, otherBalance + reward)
        message.reply("bye bye bananas")
      }
      return
    }
    message.channel.send(`you stole ${reward.toLocaleString()}${currency} bruh why? <:wherebananamonkey:985536858282922034> `)
    await db.set(`wallet_${message.author.id}`, currentBalance + reward)
    await db.set(`wallet_${victim.id}`, otherBalance - reward)
    await db.set(`stealCheck_${message.author.id}`, Date.now())
  }
}