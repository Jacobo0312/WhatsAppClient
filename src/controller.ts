import {Request, Response} from 'express'
import WhatsAppClient from './WhatsAppClient'

class Controller {
  private whatsAppClient: WhatsAppClient

  constructor() {
    this.whatsAppClient = WhatsAppClient.getInstance()
  }

  getQR = async (_req: Request, res: Response) => {
    const response = await this.whatsAppClient.getQr()
    res.send(response)
  }

  isAuthenticated = async (_req: Request, res: Response) => {
    const response = await this.whatsAppClient.isAuthenticated()
    res.send(response)
  }

  sendMessage = async (req: Request, res: Response) => {
    const {number, text} = req.params
    try {
      const response = await this.whatsAppClient.sendMessage(number, text)
      res.send(response)
    } catch (error) {
      this.whatsAppClient.disconnect()
      res.send(`Error sending message to ${number}: ${error}`)
    } finally {
      res.end()
    }
  }
}

export default Controller
