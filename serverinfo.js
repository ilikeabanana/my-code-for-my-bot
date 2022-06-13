const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  const guild = message.guild;
  let guildOwner;

  
  await guild.fetchOwner().then((member) => {
    guildOwner = member.user;
  })
  
  
  let embed = new Discord.MessageEmbed()
            .setColor("#F4DC65")
            .setTitle("Server Info")
    .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${guildOwner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
            

        message.channel.send({embeds : [embed]})
}
exports.name = "serverinfo"
exports.description = "what does this server have?"
exports.category = "info"