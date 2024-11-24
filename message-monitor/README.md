# WhatsApp-js-Bot: Message Monitor

## Overview
``Message Monitor`` is a versatile bot designed to monitor and manage messages sent in `Message Sender` using the ``whatsapp-web.js`` API. This bot monitors whether messages are sent on time according to a preconfigured interval, ensuring accuracy in communication.

**Content:**
- [Architecture](#architecture)
- [Usage](#usage)
- [Functions](#functions)
    - [whatsapp-monitor.js](#whatsapp-monitorjs)
    - [sendMessage.js](#sendmessagejs)
    - [keepAlive.js](#keepalivejs)
- [Installation](#installation)

---

## Architecture


<p align="center">
  <img src="https://github.com/user-attachments/assets/681ee70d-98e2-4246-acc0-b6f7d5d1d182" alt="Architecture">
</p>


<div align="center">
    <em>Figure 1: Architecture of Message Monitor</em>
</div>

---

## Usage

* **Initialization:**

  - The script initializes the WhatsApp client and generates a QR code for login.

  - Once logged in, it begins monitoring the specified targetNumber.

* **Message Validation:**

  - **``On-Time Messages``**:

    - If a message is sent within the defined ``interval`` and ``tolerance``, the script logs that the message was sent successfully.

  - **``Missed Messages``**:

    - If no message is sent within the interval plus the tolerance, it logs that the message was not sent on time.

  - **``Late Messages``**:

    - If a message is sent after the tolerance but before the next interval, it logs that the message was sent late.

  - **``Real-Time Monitoring``**:

    - The script listens for outgoing messages to the target number in real time.

    - It validates their timestamps and logs the appropriate status immediately.

  - **``Periodic Checks``**:

    - If no messages are detected within an interval, the script logs that a message was missed.

    - These checks ensure no gaps in monitoring, even if messages are delayed.

> [!NOTE]
> - **`Number`**: Ensure to use the format `51XXXXXXXXX@c.us` for phone numbers in Peru (+51).
> - **`Interval`**: Set the desired number of seconds for automatic monitoring message intervals.
> - **`Tolerance`**: Adjust the allowed time tolerance in seconds for message validation.

---

## Functions

### `whatsapp-monitor.js`

This is the main file that initializes the WhatsApp client and monitors messages sent to a specific target number. It includes the following functions:

* **`qrcode`**: Generates a QR code that you need to scan with the WhatsApp app to log in.

- **`sendMessage`**: Sends a text message to the target number or group.

* **``keepAlive``**: Keeps the WhatsApp session active by sending periodic logs to avoid disconnections.tsApp session active by sending periodic logs to avoid disconnections.

### `sendMessage.js`

This file exports a function that sends a text message to a WhatsApp number:

**Parameters**:
- **`client`**: Instance of the WhatsApp client.
- **`number`**: WhatsApp number (in `51XXXXXXXXX@c.us` format).
- **`message`**: The text of the message to send.


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

### 2. Go to the ``message-monitor`` folder
```bash
cd message-monitor
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
node whatsapp-monitor.js
```

### 5. Scan QR code

Once you run the bot, a QR code will be generated in the terminal. Scan it with the WhatsApp app to log in.

---

<div align="center">
    <em>
      We believe in the power of collaboration and the amazing things we can achieve together. If you have ideas, suggestions, or improvements, feel free to open an issue or submit a pull request. Let’s make this project even better—your contributions are always welcome!
    </em>
</div>


