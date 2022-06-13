exports.run = (client, message, args) => {
  let victim = message.mentions.users.first()
  
  if(!victim) return message.reply("dm someone")
  victim.send("https://tenor.com/view/things-that-you-shouldnt-stare-at-for-too-long-the-sun-winnie-the-pooh-rickroll-rick-astley-gif-16585085")
}

exports.name = "dmme"
exports.description = "dmms a person a rickroll"
exports.category = "fun"