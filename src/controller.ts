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
    const response = await this.whatsAppClient.sendMessage(number, text)
    res.send(response)
  }
}

export default Controller
