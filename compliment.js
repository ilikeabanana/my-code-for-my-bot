module.exports = {
  name: "compliment",
  description: "give someone a compliment",
  category: "fun",
  run: async (client, message, args) => {
    let victim = message.mentions.users.first()
    if(!victim) return message.channel.send("air you look so invisible today it looks awsome")
    let answers = [`${victim} you look beautiful`, `${victim}If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now.`, `${victim} You're like sunshine on a rainy day.`]
  message.channel.send(` ${answers[Math.floor(Math.random() * answers.length)]}`)
  }
}