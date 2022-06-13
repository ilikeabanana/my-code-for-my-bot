exports.run = async (client, message, args) => {
  let dUser = message.mentions.users.first()
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("https://cdn.discordapp.com/attachments/980710460456337411/983048413509746748/no-perms.jpg")
    if (!dUser) return message.channel.send("air you must be warned")
    let dMessage = args.join(" ").slice(22);
    if (dMessage.length < 1) return message.reply(`yo ${dUser} you have been warned for air`)

    dUser.send(`${dUser}, You have been warned for doing ${dMessage} in the server ${message.guild.name} not cool bro`)

    message.channel.send(`${dUser} has been warned for doing ${dMessage} not cool bro`)
}
exports.name = "warn"
exports.description = "warn a person for doing something"
exports.category = "moderation"