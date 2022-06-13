express = require("express");
const app = express();
const Database = require("@replit/database")
const db = new Database()

app.listen(3000, () => {
  console.log("project is running");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_INTEGRATIONS", "GUILD_VOICE_STATES"], 
  allowedMentions: ["users"]
});


const fs = require("fs");
const prefix = "B"
client.commands = new Discord.Collection();
client.shopItems = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}
const shopitems = fs.readdirSync("./shopitems").filter(file => file.endsWith(".js"))
for(file of shopitems){
  const shopName = file.split(".")[0]
  const shop = require(`./shopitems/${shopName}`)
  client.shopItems.set(shopName, shop)
}

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    
    if(!command) return
    if(message.author.bot) return message.reply("sup fellow bot")
    
    command.run(client, message, args)
  }
  
  
})

client.on("ready", async () => {
  console.log(`logged in as ${client.user.tag}!`);
  client.user.setActivity(`Bhelp for commands`, {type: "LISTENING"});
  
})
client.on('guildMemberAdd', async guildMember => {
  console.log("NEW MEMBER")
  const channel = await db.get(`welcome_channel${guildMember.guild.id}`)
  if(channel === null) return
  const lechannel = guildMember.guild.channels.cache.get(channel)
  lechannel.send(`hello ${guildMember} welcome to ${guildMember.guild.name}`)
})



client.login(process.env.token);