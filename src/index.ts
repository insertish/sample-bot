import { Client } from 'revolt.js';
import { config } from 'dotenv';

let client = new Client();

client.on('ready', async () =>
    console.info(`Logged in as ${client.user!.username}!`)
);

client.on('message', async message => {
    if (message.content === 'sus') {
        message.channel!.sendMessage('sus!');
    }
});

config();
client.loginBot(process.env.TOKEN!);
