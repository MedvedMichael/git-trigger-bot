const TelegramBot = require('node-telegram-bot-api')
// require('dotenv').config()

const token = process.env.TOKEN
const bot = new TelegramBot(token, {
    polling: true
})
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const firstLetters = msg.text.slice(0, 3).toLowerCase();
    
    if (firstLetters === 'git' || firstLetters === 'гит')
        bot.sendMessage(chatId, 'КТО-ТО СКАЗАЛ УРОКИ ПО ГИТУ??? @medved2001');
});