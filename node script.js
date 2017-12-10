(code lang: javascript)
// index.js
const token = '478346808:AAHPSiuiEV19ce1zvovIGcLJH5IgD8qj4yY';
const NachrichtenInboxBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/hello/, function (msg) {
bot.sendMessage(msg.chat.id, Hello ${msg.from.first_name}!);
});

console.log('bot started');
(/code)

Gestartet wird das Script mittels Node.js:

(code lang: bash)
node index.js
(/code)
