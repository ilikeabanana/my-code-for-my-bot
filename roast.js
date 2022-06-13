module.exports.run = (client, message, args) => {
  let victim = message.mentions.users.first()
  
  if(!victim) return message.reply("*roasts air*")
  if (message.mentions.has(client.user)) return message.reply("bro just roasted me well you look like a dumb league of legends player go touch some grass")
  let answers = ["Whatever doesn’t kill you, disappoints me", "Have a nice day… somewhere else.", "You were so happy for the negativity of your Covid test, we didn’t want to spoil the happiness by telling you it was IQ test.", "You are the reason why there are instructions on shampoo bottles.", "You are the reason why God is not talking to us anymore.", "It’s all about balance… you start talking, I stop listening."]
  message.channel.send(`${victim} ${answers[Math.floor(Math.random() * answers.length)]}`)
  
}
exports.name = "roast"
exports.description = "roast an idiot"
exports.category = "fun"