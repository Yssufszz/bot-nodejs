require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (text === '/start') {
    bot.sendMessage(chatId, 'Halo! Selamat datang di Test Bot 🤖');
  } else if (text.includes('halo')) {
    bot.sendMessage(chatId, 'Hai juga! Ada yang bisa aku bantu?');
  } else {
    bot.sendMessage(chatId, `Kamu bilang: ${msg.text}`);
  }
});
