const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "kick",
  description: "kicks a user what did you think???",
  category: "moderation",
  run: async (client, message, args) => {
    if(!message.member.permissions.has('KICK_MEMBERS')) return message.reply("https://cdn.discordapp.com/attachments/980710460456337411/983048413509746748/no-perms.jpg")
    if(message.member.permissions.has('KICK_MEMBERS')){
      if(!args[0]) return message.reply("AIR U JUST GOT KICKE CUZ U DONT EXIST")
      const target = message.mentions.users.first();

      
      if (target){
       const memberTarget = message.guild.members.cache.get(target.id);
if(!memberTarget.kickable) return message.reply("I CANT SORRY")
        memberTarget.kick();

try {
       const kickEmbed = new MessageEmbed()
        .setTitle("kicked")
        .setDescription(`you have been kicked from ${message.guild.name}`)
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