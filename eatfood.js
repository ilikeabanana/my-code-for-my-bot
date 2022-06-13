module.exports.run = (client, message, args) => {
  
  let victim = args.join(" ")
  if(!victim) return message.reply("did air taste good?")
    
  let taste = [`yummy`, `EWWW`]
        message.channel.send(`${message.author} ate ${victim} ... ${taste[Math.floor(Math.random() * taste.length)]}`)
    
  
}
exports.name = "eatfood"
exports.description = "eat something that isnt a person"
exports.category = "fun"