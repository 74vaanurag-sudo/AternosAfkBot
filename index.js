const mineflayer = require('mineflayer');
const http = require('http');

// Render ko active rakhne ke liye zaroori web server
http.createServer((req, res) => {
    res.write("Bot is Live!");
    res.end();
}).listen(8080);

// Aapka server details
const botOptions = {
    host: 'bosssmp-HANT.aternos.me',
    port: 32759,
    username: '24_7_Bot',
    version: "1.20.1" // <--- Yahan check karein agar server version alag hai
};

function createBot() {
    const bot = mineflayer.createBot(botOptions);

    bot.on('spawn', () => {
        console.log("Mubarak ho! Bot server mein aa gaya hai.");
    });

    bot.on('error', (err) => {
        console.log("Error: " + err.message);
    });

    bot.on('end', () => {
        console.log("Bot disconnect hua, reconnecting in 5s...");
        setTimeout(createBot, 5000);
    });
}

createBot();
