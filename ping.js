module.exports.run = (client, message, args) => {
  message.channel.send("pong")
}
exports.name = "ping"
exports.description = "pong"
exports.category = "fun"