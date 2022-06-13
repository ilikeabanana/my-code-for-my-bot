function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
exports.run = async (client, message, args) => {
  message.reply("https://tenor.com/view/good-morning-kiss-gif-23715848")
  console.log(1);
  await sleep(60000);
  console.log(2);
  message.reply("you done shitting?")
}
