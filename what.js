const Canvas = require('@napi-rs/canvas');
const { readFile } = require('fs/promises');
const Discord = require("discord.js")
const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 90;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 10}px arial`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (context.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return context.font;
};
exports.run = async (client, message, args) => {
  if(!args.join(" ")) return message.reply("what")
  const canvas = Canvas.createCanvas(800, 450);
  const context = canvas.getContext('2d');

	const backgroundFile = await readFile('./what.jpg');
	const background = new Canvas.Image();
	background.src = backgroundFile;

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
  context.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	context.font = applyText(canvas, args.join(" "));
	context.fillStyle = '#000000';
	context.fillText(args.join(" "), canvas.width / 5.5, canvas.height / 1.8);

	// Use the helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer('image/png'), 'profile-image.png');

	message.reply({ files: [attachment] });
}
exports.name = "what"
exports.description = "what?"
exports.category = "fun"