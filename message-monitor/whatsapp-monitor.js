const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

let lastMessageTime = null; // Variable para guardar la última hora del mensaje

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escanea el código QR para iniciar sesión.');
});

client.on('ready', () => {
    console.log('¡Cliente listo para monitorear mensajes!');

    // Revisión periódica del último mensaje
    setInterval(() => {
        if (lastMessageTime) {
            console.log(`Última actividad a las: ${new Date(lastMessageTime * 1000).toLocaleString()}`);
        } else {
            console.log('No hay mensajes enviados o recibidos aún.');
        }
    }, 60000); // Revisar cada minuto
});


// Monitorear mensajes enviados
client.on('message_create', message => {
    if (message.fromMe) {
        lastMessageTime = message.timestamp; // Actualizar la hora del último mensaje enviado
        console.log(`Mensaje enviado a las: ${new Date(lastMessageTime * 1000).toLocaleString()}`);
    }
});

// Inicializar el cliente
client.initialize();
