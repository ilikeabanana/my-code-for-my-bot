exports.run = (client, message, args) => {
  if(message.author.username === "banana studio") return message.reply("woah you are my creator so YOU are the owner")
  message.reply("its banana studio check his yt channel and server out: https://www.youtube.com/channel/UCpY8Sz-6SEZSRT9OMdxZ5hA https://discord.gg/PedgQYHU9Y")
}
exports.name = "whoisowner"
exports.description = "hmmmm who is owner..."
exports.category = "fun"