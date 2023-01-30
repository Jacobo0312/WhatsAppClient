import express from 'express'
import Controller from './controller'

const app = express()
const port = 3000

const controller = new Controller()

app.get('/sendMessage/:number/:text', controller.sendMessage)
app.get('/isAuthenticated', controller.isAuthenticated)
app.get('/getQr', controller.getQR)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
