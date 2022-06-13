exports.name = "modpass"
exports.value = 100000
exports.needargs = true
exports.run = (client, message, args) => {
  console.log("BRUH")
  if(!args) return message.reply("brruh you said nothing so you wasted this")
  if(args.length < 1) return message.reply("no")
  if(args === "") return message.reply("ah")
  client.guilds.cache.forEach((guild) => {
    if(guild.id === "980370850756841513"){
      const lechannel = guild.channels.cache.get("985189731002372136")
      lechannel.send(`from ${message.author} in ${message.guild} wanted to say: ${args}`)
      
    }
  })
  message.reply("done")
}