client.on('message', message => {
    console.log(message.body);
	if(message.body === 'Como estas?') {
		client.sendMessage(message.from, 'Bien y tu?:.');
	}
});

client.initialize();
