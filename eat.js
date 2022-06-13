module.exports.run = (client, message, args) => {
  let victim = message.mentions.users.first()
  
  if(!victim) return message.reply("did air taste good?")
  
  if(victim === message.author) return message.reply("eating yourself to death?")
  if (message.mentions.has(client.user)) return message.reply("WHY EAT MEEE <:cry:973976779184295986>")
    
  let taste = [`yummy`, `EWWW`]
        message.channel.send(`${message.author} ate ${victim} ... ${taste[Math.floor(Math.random() * taste.length)]}`)
    
  
}
exports.name = "eat"
exports.description = "eat a person"
exports.category = "fun"