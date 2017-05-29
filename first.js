const Discord = require('discord.js');
const client = new Discord.Client();
const comm = require('./commands.js');


client.on('ready', () =>{
	console.log('The bot is online');	
});


client.login('MzE4ODM0NTgxNzU3NDkzMjQ4.DA4PZw.7AN-asv7XIwLL8WVdtnPtR_ErZQ');

exports.client = client;