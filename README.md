# WhatsApp js Bot

## Overview
This repository is focused on automating the process of sending messages and file attachments through WhatsApp. This project use WhatsApp Web for the message delivery mechanism but leverage different tools and approaches for automation. These solutions can be used to send timely alerts based on various triggers, ensuring fast and efficient communication directly through WhatsApp.

**Content**:
- [Introduction](#introduction)
- [Message Sender](#message-sender)
  - [Key Features](#key-features)
  - [File Structure](#file-structure)


---

## Introduction
The **WhatsApp-js-Bot** project uses the `whatsapp-web.js` API to automate sending messages and files through WhatsApp. The bot initiates a session by scanning a QR code and remains active to send periodic messages and file attachments to designated WhatsApp numbers or groups. This project is highly customizable, allowing users to modify the target recipients, messages, and files to fit various use cases.

---

## Message Sender

### Key Features
- **QR Code Login**: The bot uses WhatsApp Web by scanning a QR code to authenticate and log in.
- **Send Messages and Files**: It can send both text messages and files to a target WhatsApp number or group.
- **Session Keep Alive**: Includes functionality to keep the WhatsApp session active, avoiding the need for constant re-authentication.


### File Structure
- **whatsapp-client.js**: Initializes the WhatsApp client, handles QR code generation, and manages sending text messages and files.
- **sendMessage.js**: Defines the function that sends a text message to a specified WhatsApp number.
- **sendFile.js**: Exports the function to send file attachments to a specified number or group.
- **keepAlive.js**: Ensures the session stays active by periodically sending logs to prevent disconnection.
