exports.run = (client, message, args) => {
  let whatrealized = args.join(" ")
  if(!whatrealized) return message.reply("you realized nothing???")
  message.channel.send(`when you realize ${whatrealized} 
https://media.discordapp.net/attachments/843128484448698408/981627968428318790/ezgif.com-gif-maker.gif`)
  
}

exports.name = "whenyourealize"
exports.description = "when you realize ratatouil is old"
exports.category = "fun"