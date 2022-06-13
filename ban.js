const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "ban",
  description: "bans a user what did you think???",
  category:  "moderation",
  run: async (client, message, args) => {
    if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply("https://cdn.discordapp.com/attachments/980710460456337411/983048413509746748/no-perms.jpg")
    if(message.member.permissions.has('BAN_MEMBERS')){
      if(!args[0]) return message.reply("AIR U JUST GOT BANNED CUZ U DONT EXIST")
      const target = message.mentions.users.first();

      
      if (target){
       const memberTarget = message.guild.members.cache.get(target.id);
if (!memberTarget.bannable) return message.reply("CANT BAN SORRY")
        memberTarget.ban();

try {
       const kickEmbed = new MessageEmbed()
        .setTitle("banned")
        .setDescription(`you have been banned from ${message.guild.name}`)
        .setColor("RED")
  
      target.send({ embeds: [kickEmbed] }).catch(() => message.reply("can't dm this boi!"));
      } catch (e) {
message.channel.send(e)
console.log(e)
}
      }
    }
  }
}