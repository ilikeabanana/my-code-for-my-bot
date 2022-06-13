module.exports.run = async (client, message, args) => {

  let number = args.join(" ")
  if(!number) return message.reply('air is not a number lol')
  if(isNaN(number)) return message.reply(number + "ITS NOT A GODDAMN NUMBER")
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("https://cdn.discordapp.com/attachments/980710460456337411/983048413509746748/no-perms.jpg")
  if(number > 100) return message.reply("100 is max idiot")

  await message.channel.bulkDelete(number).then (message.channel.send(`Sucessfully cleared ${number} messages from ${message.channel.id} ✅`));



}
exports.name = "deletemessages"
exports.description = "delete a number of messages"
exports.category = "moderation"