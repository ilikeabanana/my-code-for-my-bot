module.exports.run = (client, message, args) => {
  let answers = ["Who’s there? interupting cow, Interrupting c–, MOO", "What’s the best thing about Switzerland?I don’t know, but the flag is a big plus.", "Did you hear about the mathematician who’s afraid of negative numbers?He’ll stop at nothing to avoid them.", "Why do we tell actors to “break a leg?”Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.", "If you’re American when you go in the bathroom…… and American when you come out, what are you in the bathroom?European. Check out these daily life cartoons that will crack you up.", "you"]
  message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)
  
}
exports.name = "joke"
exports.description = "get a cringe joke"
exports.category = "fun"