const first = require('./first.js');


first.client.on('message', message =>{
	if(message.content === '?quack'){
		message.reply('Quack-quack! ' + message.author.username);
	}
});

