const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const targetNumber = '51973434110'; // Reemplaza con el número deseado

let firstMessageTime = null;
let expectedMessageTime = null;
const tolerance = 5; // Tolerancia de +/- 5 segundos
const interval = 60; // Intervalo esperado entre mensajes (en segundos)

let messageSent = false;

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escanea el código QR para iniciar sesión.');
});

client.on('ready', () => {
    console.log('Client is ready!');
    console.log(`Monitoreando mensajes enviados al número ${targetNumber}.`);

    // Revisión periódica para verificar si los mensajes se enviaron a tiempo
    setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos

        if (expectedMessageTime) {
            if (currentTime > expectedMessageTime + tolerance) {
                console.log(`Mensaje NO enviado a tiempo para la hora: ${new Date(expectedMessageTime * 1000).toLocaleString()}`);
                expectedMessageTime += interval;
                messageSent = false;
            }
        }
    }, 1000);
});

// Monitorear mensajes enviados desde esta cuenta al número establecido
client.on('message_create', message => {
    const chatId = `${targetNumber}@c.us`;

    if (message.to === chatId) {
        const messageTime = message.timestamp;

        if (!firstMessageTime) {
            firstMessageTime = messageTime;
            expectedMessageTime = firstMessageTime + interval;
            console.log(`Primer mensaje enviado a las: ${new Date(messageTime * 1000).toLocaleString()}`);
            console.log("Enviado correctamente");
            messageSent = true;
        } else {
            const timeDifference = Math.abs(messageTime - expectedMessageTime);
            // Mensaje enviado correctamente
            if (timeDifference <= tolerance) {
                console.log(`Mensaje enviado a las: ${new Date(messageTime * 1000).toLocaleString()}`);
                console.log("Enviado correctamente");
                expectedMessageTime += interval;
                messageSent = true;
                return;
            }
            
            // Mensaje enviado tarde
            if (!messageSent && messageTime > expectedMessageTime - interval + tolerance && messageTime < expectedMessageTime - tolerance) {
                console.log(`Mensaje enviado tarde. Debía enviarse a las: ${new Date((expectedMessageTime -interval) * 1000).toLocaleString()}, pero se envió a las: ${new Date(messageTime * 1000).toLocaleString()}`);
                messageSent=true;
            }

        }
    }
});


client.initialize();
