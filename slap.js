const Canvas = require('@napi-rs/canvas');
const { readFile } = require('fs/promises');
const { request } = require('undici');
const Discord = require("discord.js")
const slapuser = async (messageauthor, client, message) => {
  
  const canvas = Canvas.createCanvas(960, 500);
  const context = canvas.getContext('2d');

	const backgroundFile = await readFile('./slap.png');
	const background = new Canvas.Image();
	background.src = backgroundFile;
  context.strokeRect(0, 0, canvas.width, canvas.height);

	const { body } = await request(message.author.displayAvatarURL({ format: 'png' }));
	const avatar = new Canvas.Image();
	avatar.src = Buffer.from(await body.arrayBuffer());

  context.strokeRect(0, 0, canvas.width, canvas.height);

	const labody = await request(client.user.displayAvatarURL({ format: 'png' }));
	const slapper = new Canvas.Image();
	slapper.src = Buffer.from(await labody.body.arrayBuffer());

	// Draw a shape onto the main canvas
	

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
  context.drawImage(avatar, 200, 200, 200, 200);
  context.drawImage(slapper, 500, 20, 200, 200);

	// Use the helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer('image/png'), 'profile-image.png');

	message.reply({ files: [attachment] });
}
exports.run = async (client, message, args) => {
  let dUser = message.mentions.users.first()
  if(!dUser) return slapuser(message.author, client, message)
  if(dUser.id === "973907098008191027") return message.reply("https://youtu.be/xNM-L5zZQto")
  const canvas = Canvas.createCanvas(960, 500);
  const context = canvas.getContext('2d');

	const backgroundFile = await readFile('./slap.png');
	const background = new Canvas.Image();
	background.src = backgroundFile;
  context.strokeRect(0, 0, canvas.width, canvas.height);

	const { body } = await request(dUser.displayAvatarURL({ format: 'png' }));
	const avatar = new Canvas.Image();
	avatar.src = Buffer.from(await body.arrayBuffer());

  context.strokeRect(0, 0, canvas.width, canvas.height);

	const labody = await request(message.author.displayAvatarURL({ format: 'png' }));
	const slapper = new Canvas.Image();
	slapper.src = Buffer.from(await labody.body.arrayBuffer());

	// Draw a shape onto the main canvas
	

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
  context.drawImage(avatar, 200, 200, 200, 200);
  context.drawImage(slapper, 500, 20, 200, 200);

	// Use the helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer('image/png'), 'profile-image.png');

	message.reply({ files: [attachment] });
}
exports.name = "slap"
exports.description = "batman slap a person"
exports.category = "fun"