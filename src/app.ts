import express from 'express'
import Controller from './controller'

// Create an express application instance
const app = express()
// Set the port number
const port = 3000

// Create an instance of Controller
const controller = new Controller()

// Define a GET route for the endpoint '/sendMessage/:number/:text'
app.get('/sendMessage/:number/:text', controller.sendMessage)

// Define a GET route for the endpoint '/isAuthenticated'
app.get('/isAuthenticated', controller.isAuthenticated)

// Define a GET route for the endpoint '/getQr'
app.get('/getQr', controller.getQR)

// Start the express application to listen on the specified port
app.listen(port, () => {
  // Log a message to the console once the server is running
  console.log(`Server is running at http://localhost:${port}`)
})
