const discord = require('discord.js')
const Database = require("@replit/database")
const db = new Database()
exports.run = async(client, message, args) =>{
  const check = await db.get(`rpsCheck_${message.author.id}`);
  const timeout = 1800000;
   if(check !== null && timeout - (Date.now() - check) > 0 && message.author.id !== "879990618519117884") {
    const ms = require("pretty-ms")
    const timeleft = ms(timeout - (Date.now() - check))
    message.channel.send(`you already played come back after ${timeleft}`)
  } else {
     let reward = 1000
    let currentBalance = await db.get(`wallet_${message.author.id}`)
     if(currentBalance < reward) return message.reply("you are to broke to play")
  const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`Brps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
     await db.set(`rpsCheck_${message.author.id}`, Date.now())
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper'){ message.reply('I won!')
                  message.reply('bye bye bananas')
                  await db.set(`wallet_${message.author.id}`, currentBalance - reward);
                                        return
                                       }
                else message.reply('You won!');
              await db.set(`wallet_${message.author.id}`, currentBalance + reward)
              return
            }
            case 'paper': {
                if (result === 'scissors'){
                  message.reply('I won!') 
                  message.reply("bye bye bananas")
                  await db.set(`wallet_${message.author.id}`, currentBalance - reward);
                  return
                }
                else message.reply('You won!');
              await db.set(`wallet_${message.author.id}`, currentBalance + reward)
              return
            }
            case 'scissors': {
                if (result === 'rock'){return message.reply('I won!'); message.reply('bye bye bananas'); await db.set(`wallet_${message.author.id}`, currentBalance - reward); 
                                      return}
                else message.reply('You won!');
              await db.set(`wallet_${message.author.id}`, currentBalance + reward)
              return
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
   }
}
