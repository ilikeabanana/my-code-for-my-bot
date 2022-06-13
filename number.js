exports.run = (client, message, args) => {
  let max = args
  if(!max) return message.reply("i just cant give a random number if you dont give me one!!!!")
  let number = Math.floor(Math.random() * max) + 1
  message.channel.send(`${number}`)
}
exports.name = "number"
exports.description = "get a random number"
exports.category = "fun"