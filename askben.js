module.exports.run = (client, message, args) => {
  let noice = args.join(" ")
  if(!noice) return message.reply("ben is confused")
  let answers = ["https://tenor.com/view/dog-saying-no-no-ben-no-phone-call-no-call-no-gif-24938149", "https://tenor.com/view/ben-yes-yes-fthememer-phone-call-yes-call-yes-gif-24938145", "https://tenor.com/view/ben-laughs-ben-laughing-ben-meme-fthememer-ben-phone-call-gif-24938219", "https://tenor.com/view/dog-hang-up-the-call-ben-hang-up-ben-hangsup-ben-call-meme-ben-phone-call-meme-gif-24938152", "https://tenor.com/view/talking-ben-ugh-gif-25161322"]
  message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)
}
exports.name = "askben"
exports.description = "ask ben a question"
exports.category = "fun"