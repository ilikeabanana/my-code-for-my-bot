const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  let currency = ":banana:"
  const check = await db.get(`monthlyCheck_${message.author.id}`);
  const timeout = 2629800000;
  if(check !== null && timeout - (Date.now() - check) > 0) {
    const ms = require("pretty-ms")
    const timeleft = ms(timeout - (Date.now() - check))
    message.channel.send(`You have already claimed your prize come back after ${timeleft}`)
  } else {
    let reward = 2500
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    message.channel.send(`GG! you claimed ${reward.toLocaleString()}${currency} as your daiy reward see you in a month`)
    await db.set(`wallet_${message.author.id}`, currentBalance + reward)
    await db.set(`monthlyCheck_${message.author.id}`, Date.now())
  }
}
exports.name = "monthly"
exports.description = "get your monthly bananas"
exports.category = "economy"