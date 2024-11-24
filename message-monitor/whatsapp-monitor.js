const fs = require('fs');
const sendMessage = require('../message-monitor/sendMessage');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const number = 'insert-number'; // Replace with the desired number
const monitor_number = 'insert-monitor-number@c.us'
let firstMessageTime = null;
let expectedMessageTime = null;
const tolerance = 5; // Tolerance
const interval = 36; // Expected interval between messages (in seconds)

let messageSent = false;

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escanea el código QR para iniciar sesión.');
});

client.on('ready', () => {
    console.log('Client is ready!');
    console.log(`Monitoring messages sent to the number: ${number}`);

    setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000); // Current time

        if (expectedMessageTime) {
            if (currentTime > expectedMessageTime + tolerance) {
                message_1 = `Message NOT sent on time: ${new Date(expectedMessageTime * 1000).toLocaleString()}`;
                sendMessage(client,monitor_number,message_1)
                expectedMessageTime += interval;
                messageSent = false;
            }
        }
    }, 1000);
});

// Monitoring message
client.on('message_create', message => {
    const chatId = `${number}@c.us`;
    
    if (message.to === chatId) {
        const messageTime = message.timestamp;

        if (!firstMessageTime) {
            firstMessageTime = messageTime;
            expectedMessageTime = firstMessageTime + interval;
            console.log(`First message at: ${new Date(messageTime * 1000).toLocaleString()}`);
            console.log("Sent successfully");
            messageSent = true;
        } else {
            const timeDifference = Math.abs(messageTime - expectedMessageTime);
            // Message sent succesfully
            if (timeDifference <= tolerance) {
                console.log(`Message sent at: ${new Date(messageTime * 1000).toLocaleString()}`);
                console.log("Sent successfully");
                expectedMessageTime += interval;
                messageSent = true;
                return;
            }
            
            // MEssage sent late
            if (!messageSent && messageTime > expectedMessageTime - interval + tolerance && messageTime < expectedMessageTime - tolerance) {
                message_2 = `Message sent late. It was supposed to be sent at: ${new Date((expectedMessageTime -interval) * 1000).toLocaleString()}, but it was sent at: ${new Date(messageTime * 1000).toLocaleString()}`;
                sendMessage(client,monitor_number,message_2)

                messageSent=true;
            }
            
        }
    }
});


client.initialize();