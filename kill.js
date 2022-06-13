module.exports.run = (client, message, args) => {
  let victim = message.mentions.users.first()
  
  if(!victim) return message.reply("bro i cant kill air")
  if (message.mentions.has(client.user)) return message.reply("*kills you instead* <:pepegun:966988906547511306>")
  if(victim === message.author) return message.reply("WOW suicide noice")
  let typesofdeath = [`${victim} died of ligma`, `${message.author} made ${victim} play talking ben and died`, `${victim} just died out of nowhere`, `${message.author} DM ${victim} a rickroll`, `${victim} choked on cheerios and dies. What an idiot...`, `${message.author} yeeted ${victim} out of space`]
    message.channel.send(`${typesofdeath[Math.floor(Math.random() * typesofdeath.length)]}`)
  
}
exports.name = "kill"
exports.description = "kill a person"
exports.category = "fun"