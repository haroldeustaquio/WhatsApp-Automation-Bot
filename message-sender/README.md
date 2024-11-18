# WhatsApp-js-Bot: Message Sender

## Overview
This project is an automation bot for sending messages and files over WhatsApp using the `whatsapp-web.js` API. The bot scans a QR code to log in, keeps the session active, and sends messages and files periodically to a specific WhatsApp number or group.

**Content:**
- [Architecture](#architecture)
- [Functions](#functions)
    - [whatsapp-client.js](#whatsapp-clientjs)
    - [sendMessage.js](#sendmessagejs)
    - [sendFile.js](#sendfilejs)
    - [keepAlive.js](#keepalivejs)
- [Installation](#installation)
- [Usage](#usage)

---

## Architecture


<p align="center">
  <img src="https://github.com/user-attachments/assets/903432c8-ace8-4c3d-b9d9-13f9b50213e7" alt="Architecture">
</p>


<div align="center">
    <em>Figure 1: Architecture of Message Sender</em>
</div>

---

## Functions

### `whatsapp-client.js`
This is the main file that initializes the WhatsApp client. It includes the following functions:
- **`qrcode`**: Generates a QR code that you need to scan with the WhatsApp app to log in.
- **`sendMessage`**: Sends a text message to the target number or group.
- **`sendFile`**: Sends a file to the target number or group.
- **`keepAlive`**: Keeps the WhatsApp session active by sending periodic logs to avoid disconnections.

### `sendMessage.js`
This file exports a function that sends a text message to a WhatsApp number:

**Parameters**:
- `client`: Instance of the WhatsApp client.
- `number`: WhatsApp number (in `51XXXXXXXXX@c.us` format).
- `message`: The text of the message to send.

### `sendFile.js`
This file exports a function that sends a file to a WhatsApp number:

**Parameters**:
- `client`: WhatsApp client instance.
- `number`: WhatsApp number (in `51XXXXXXXXX@c.us` format).
- `filePath`: Local path of the file to be sent.
- `fileName`: Name of the file to display on WhatsApp.

### `keepAlive.js`
This file exports a function that keeps the WhatsApp session active:

**Function**:
- Runs a periodic function (every 5 minutes) that keeps the session alive by printing a message to the console.
---

## Installation

To run this project, make sure you have Node.js installed and follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/haroldeustaquio/alert-system-whatsapp.git
```

### 2. Go to the whatsapp-js-bot folder
```bash
cd whatsapp-js-bot
```

### 3. Install dependencies:
- whatsapp-web.js 
- qrcode-terminal 
- fs

```bash
npm install whatsapp-web.js qrcode-terminal fs
```

### 4. Run the bot
```bash
node whatsapp-client.js
```

### 5. Scan QR code

Once you run the bot, a QR code will be generated in the terminal. Scan it with the WhatsApp app to log in.

---

## Usage

Modify the ``whatsapp-client.js`` file with the destination number and the file you want to send:

- Number: You must use the format ``51XXXXXXXXX@c.us`` for numbers in Peru.
- Message: You can customize the text message to send.
- File: Change the file path and its name if you want to send a different file.
- Interval: Change the number of ms to send messages automatically

> [!NOTE]
> - If the file does not exist or the path is incorrect, the bot will throw an error indicating that the file was not found.
> - To send messages to a group, replace the number with the group ID in WhatsApp.
