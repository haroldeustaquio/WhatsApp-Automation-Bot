# WhatsApp-js-Bot: Message Sender

## Overview
`Message Sender` is an automation bot for sending messages and files over WhatsApp using the ``whatsapp-web.js`` API. The bot scans a QR code to log in, keeps the session active, and sends messages and files periodically to a specific WhatsApp number or group.

**Content:**
- [Architecture](#architecture)
- [Usage](#usage)
- [Functions](#functions)
    - [whatsapp-client.js](#whatsapp-clientjs)
    - [sendMessage.js](#sendmessagejs)
    - [sendFile.js](#sendfilejs)
    - [keepAlive.js](#keepalivejs)
- [Installation](#installation)

---

## Architecture


<p align="center">
  <img src="https://github.com/user-attachments/assets/903432c8-ace8-4c3d-b9d9-13f9b50213e7" alt="Architecture">
</p>


<div align="center">
    <em>Figure 1: Architecture of Message Sender</em>
</div>

---

## Usage

* **Initialization**

  - The script initializes the WhatsApp client using the `whatsapp-web.js` API.
  - Generates a QR code that must be scanned with the WhatsApp app to log in.
  - Once logged in, it keeps the session active using the `keepAlive` module.

* **Automated Sending**

  - **Text Messages**
    - Sends a predefined text message to the specified target number or group.
    - The message content can be customized by modifying the `message` variable.

  - **File Sending**
    - Attaches and sends a file to the same target number or group.
    - Both the file path (`filePath`) and file name (`fileName`) must be configured.

  - **Interval Execution**
    - Messages and files are sent automatically at regular intervals defined by the `interval` variable (default: 60000 ms or 1 minute).


> [!NOTE]
> - **``Number``**: You must use the format ``51XXXXXXXXX@c.us`` for numbers in Peru (+51).
> - **``Message``**: You can customize the text message to send.
> - **``File``**: Change the file path and its name if you want to send a different file.
> - **``Interval``**: Change the number of ms to send messages automatically

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
- **`client`**: Instance of the WhatsApp client.
- **`number`**: WhatsApp number (in `51XXXXXXXXX@c.us` format).
- **`message`**: The text of the message to send.

### `sendFile.js`
This file exports a function that sends a file to a WhatsApp number:

**Parameters**:
- **`client`**: WhatsApp client instance.
- **`number`**: WhatsApp number (in `51XXXXXXXXX@c.us` format).
- **`filePath`**: Local path of the file to be sent.
- **`fileName`**: Name of the file to display on WhatsApp.

### `keepAlive.js`
This file exports a function that keeps the WhatsApp session active:

**Function**:
- Runs a periodic function (every 5 minutes) that keeps the session alive by printing a message to the console.

---

## Installation

To run this project, make sure you have ``Node.js`` installed and follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/haroldeustaquio/WhatsApp-js-Bot.git
```

### 2. Go to ``message-sender`` folder
```bash
cd message-sender
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

<div align="center">
    <em>
      We believe in the power of collaboration and the amazing things we can achieve together. If you have ideas, suggestions, or improvements, feel free to open an issue or submit a pull request. Let’s make this project even better—your contributions are always welcome!
    </em>
</div>