import {Request, Response} from 'express'
import WhatsAppClient from './WhatsAppClient'

class Controller {
  getQR = async (_req: Request, res: Response) => {
    const response = await WhatsAppClient.getInstance().getQr()
    res.send(response)
  }

  isAuthenticated = async (_req: Request, res: Response) => {
    const response = await WhatsAppClient.getInstance().isAuthenticated()
    res.send(response)
  }

  private whatsAppClient: WhatsAppClient

  constructor() {
    this.whatsAppClient = WhatsAppClient.getInstance()
  }

  async sendMessage(req: Request, res: Response) {
    const number = req.params.number
    const text = req.params.text

    const x = await WhatsAppClient.getInstance().sendMessage(number, text)

    res.send(x)
  }
}

export default Controller
