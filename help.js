const prettyMs = require("pretty-ms");
const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");
let prevalue = "nothingrn";
module.exports = {
  name: "help",
  description: "Learn about the commands of the bot.",
  aliases: [],
  permissions: [],
  category: "info",
  disabledChannel: [],
  cooldown: 60,
  /**
   *
   * @param {CommandStructure}
   * @returns {Promise<*>}
   */
  run: async (client, message, args) => {
    
    let embed1 = new MessageEmbed()
    .setColor("YELLOW")
    .setDescription("rekt")
    .setTitle("idiot")
    
    // Send a message embed with BLUPRPLEL as color, at title type Select category, and at description put Please put a category that you want to view commands for.
    let commands = Array.from(client.commands.values());
    // Commands is a array of commands, commands consists of name, description, aliases, category
    // Group commands by each category
    let categories = commands.reduce((acc, command) => {
      if (!acc[command.category]) {
        acc[command.category] = [];
      }
      acc[command.category].push(command);
      return acc;
    }, {});
    console.log(categories);
    let embed = new MessageEmbed()
      .setColor("YELLOW")
      .setTitle("Select category")
      .setDescription(
        "Please select a category from the selection menu given below to view commands. (also made by imagine gaming plays so sub to him)"
      );
    let cat = Object.keys(categories).map((category) => {
      return {
        label: category,
        value: "help_" + category,
      };
    });
    let menu = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("help")
        .setPlaceholder("Nothing selected")
        .addOptions(cat)
    );
    client.on('interactionCreate', async (interaction) => 
{
  if(interaction.isSelectMenu)
  {
    
    if(interaction.customId == "help")
    {
       const filter = (interaction) =>
interaction.isSelectMenu() &&
interaction.user.id === message.author.id;
      
      const collector = message.channel.createMessageComponentCollector({
        filter,
        max: "1", //basically allowing the user to interact with the menu ten thousand times.
      })
      collector.on("collect", async (collected) => {
        const value = collected.values[0];
        if(value === prevalue) return
        let commandos = new MessageEmbed()
        .setTitle(`${value} commands`)
        .setColor("YELLOW")
        for (let i = 0; i < commands.length; i++){
          if(`help_${commands[i].category}` === value){
            commandos.addField(`${commands[i].name}`, `${commands[i].description}`)
          }
        }
        collected.update({embeds: [commandos]})
        console.log("yez")
        prevalue = value;
      })
    }
  }
})
    

    // Send the message embed to the channel and attach a selection menu with all the categories.
    
    try {
      await message.reply({
        embeds: [embed],
        components: [menu],
      });
    } catch (e) {
      return;
    }
  }}
