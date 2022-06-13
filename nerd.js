exports.run = (client, message, args) => {

  
  let nerd = args.join(" ")
  if(!nerd) return message.reply("whats so nerdy??")
  message.channel.send(`"${nerd}": <:funnynerd:984791610938257468> `)

}
exports.name = "nerd"
exports.description = "this is so dumb: :nerd:"
exports.category = "fun"