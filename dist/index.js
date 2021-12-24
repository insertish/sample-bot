var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client } from 'revolt.js';
import { config } from 'dotenv';
let client = new Client();
client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () { return console.info(`Logged in as ${client.user.username}!`); }));
client.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.content === 'sus') {
        message.channel.sendMessage('sus!');
    }
}));
config();
client.loginBot(process.env.TOKEN);
