
exports.run = (client, message, args) => {
  let string = args.join(" ")
  if(!string) return message.reply("what needs to be reversed")
  string = [...string].reverse().join("");
  message.channel.send(string)
}
exports.name = "reverse"
exports.description = "esrever ni gnihtemos teg"
exports.category = "fun"