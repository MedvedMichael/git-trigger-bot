const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()

const token = process.env.TOKEN
const bot = new TelegramBot(token, {
    polling: true
})

bot.on("polling_error", (msg) => console.log(msg));

bot.on('message', ({ chat, text }) => {
    try {
        const chatId = chat.id;
        if(!text) return;
        const words = text.split(' ')
        for (let index = 0; index < words.length; index++) {
            const element = words[index];
            const firstLetters = element.slice(0, 3).toLowerCase();

            if (firstLetters === 'git' || firstLetters === 'гит' || (firstLetters === 'пше' && element.length === 3))
                bot.sendMessage(chatId, 'КТО-ТО СКАЗАЛ УРОКИ ПО ГИТУ??? @medved2001');
        }

    } catch (error) {
        console.log(error)
    }
});