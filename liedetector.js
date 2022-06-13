module.exports.run = (client, message, args) => {
  let noice = args.join(" ")
  if(!noice) return message.reply("WOW you asked nothing thats so :billed_cap:")
  let answers = ["thats :billed_cap:", "thats :white_check_mark:"]
  message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)
}
exports.name = "liedetector"
exports.description = "is it a lie?"
exports.category = "fun"