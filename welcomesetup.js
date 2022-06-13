const Database = require("@replit/database")
const db = new Database()
exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("https://cdn.discordapp.com/attachments/980710460456337411/983048413509746748/no-perms.jpg")
  let number = args.join(" ")
  if (!message.guild.channels.cache.get(number))
      return message.channel.send(
        'thats not a channel bruh be sure to get the id',
  );
  if(!number) return message.reply('air is not a number lol')
  if(isNaN(number)) return message.reply(number + "ITS NOT A GODDAMN NUMBER")
  await db.set(`welcome_channel${message.guild.id}`, number)
  message.guild.channels.cache.get(`${number}`).send('here are my welcome messages');
}
exports.name = "welcomesetup"
exports.description = "setup your welcome messages"
exports.category = "setup"