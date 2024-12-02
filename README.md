# WhatsApp js Bot

## Overview
This repository is focused on automating and monitoring the process of sending messages and file attachments through WhatsApp. It leverages the `whatsapp-web.js` API for message delivery while introducing modular tools for both sending and tracking messages. These solutions are ideal for automating communication tasks, ensuring accurate and timely delivery.

**Content**:
- [Message Sender](#message-sender)
  - [Key Features](#key-features)
  - [File Structure](#file-structure)
- [Message Monitor](#message-monitor)
  - [Key Features](#key-features-1)
  - [File Structure](#file-structure-1)
- [Installation](#installation)


---

## Message Sender

The **`Message Sender`** script automates the sending of messages and files through WhatsApp. It is designed for scenarios requiring periodic updates or alerts to specific numbers or groups.

### Key Features
- **QR Code Login**: Authenticate using WhatsApp Web by scanning a QR code.
- **Automated Text and File Sending**: Sends predefined messages and file attachments to the target number or group.
- **Session Keep Alive**: Uses a keep-alive mechanism to prevent session timeouts during prolonged use.

### File Structure
- **``whatsapp-client.js``**: Manages WhatsApp client initialization, QR code authentication, and triggers periodic sending of messages and files.
- **``sendMessage.js``**: Contains the function for sending text messages to a WhatsApp number.
- **``sendFile.js``**: Handles file attachments to be sent to a specific number or group.
- **``keepAlive.js``**: Keeps the session active by periodically logging the connection status.

---

## Message Monitor

The **`Message Monitor`** script tracks messages sent by the **`Message Sender`** to ensure they are delivered on time. It validates timing against predefined intervals and tolerances.

### Key Features
- **Real-Time Monitoring**: Tracks outgoing messages to the target number in real time.
- **Message Validation**:
  - Logs whether messages are sent on time, late, or not at all.
  - Differentiates between missed and delayed messages for detailed tracking.
- **Session Management**: Ensures continuous operation by keeping the session active.

### File Structure
- **``whatsapp-monitor.js``**: Initializes the WhatsApp client and implements message tracking based on intervals and tolerances.
- **``sendMessage.js``**: Sends alert messages for missed or late messages.
- **``keepAlive.js``**: Maintains session stability during monitoring.

---

## Installation

Ensure you have **`Node.js`** installed on your system.

### 1. **Clone the repository**:

  ```bash
  git clone https://github.com/haroldeustaquio/WhatsApp-js-Bot.git
  ```

### 2. **Navigate to the desired module**:

* For **``Message Sender``**:
  ```bash
  cd message-sender
  ```

* For **``Message Monitor``**:
  ```bash
  cd message-monitor
  ```

### 3. **Install dependencies**:

  ```bash
  npm install whatsapp-web.js qrcode-terminal fs
  ```

### 4. **Run the desired script**:

* For **``Message Sender``**:
  ```bash
  node whatsapp-client.js
  ```

* For **``Message Monitor``**:
  ```bash
  node whatsapp-monitor.js
  ```

### 5. **Scan QR code**:

Once the bot starts, scan the QR code displayed in the terminal with the WhatsApp app to log in.


---

<div align="center"> 
  <em> 
    We believe in the power of collaboration. If you have ideas, suggestions, or improvements, feel free to open an issue or submit a pull request. Let’s make this project even better—your contributions are always welcome! 
  </em> 
</div>