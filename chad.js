exports.run = async (client, message, args) => {
  const fullargs = args.join(" ")
  if(!fullargs) return message.channel.send(`nothing:
https://tenor.com/view/gigachad-chad-gif-20773266`)
  message.channel.send(`${fullargs}:
https://tenor.com/view/gigachad-chad-gif-20773266`)
}
exports.name = "chad"
exports.description = "makes a chad meme"
exports.category = "fun"