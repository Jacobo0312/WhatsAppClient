# WhatsAppClient

This is a TypeScript project for creating a client for the WhatsApp Web API. It allows to interact with the API and perform operations like sending messages, checking authentication status and retrieving QR code.

## Prerequisites

- Node.js and npm installed on your machine
- A device with WhatsApp installed and open
- QR code of the WhatsApp to be able to authenticate

## Installation

1. Clone the repository
2. Run `npm install` in the project folder to install all dependencies

## Running the server

1. Run `npm start` to start the server
2. The server will be running on http://localhost:3000

## API endpoints

- GET /sendMessage/:number/:text: Sends a message to the specified number with the specified text
- GET /isAuthenticated: Returns the authentication status of the client
- GET /getQr: Returns the QR code for authentication

## Code structure

- `src/app.ts`: Entry point of the application. It sets up the express app and listens to the specified port
- `src/controller.ts`: Handles the routes and delegates the work to the WhatsAppClient
- `src/WhatsAppClient.ts`: The main client which interacts with the WhatsApp Web API. It implements the singleton pattern to ensure that only one instance of the client is created.

## Contributing

If you wish to contribute to the project, feel free to create a pull request. Make sure your changes are well-documented and well-tested.
