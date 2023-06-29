import {Request, Response} from 'express'
import Client from "../model/Client";
import WhatsAppClient from "../model/WhatsAppClient";

class ClientService {
  private client: Client
  private whatsAppClient: WhatsAppClient

  constructor() {
    this.client = new Client()
    this.whatsAppClient = this.client.getWhatsappClient()
  }

  getQR = async () => {
    return this.client.getQR();
  }

  isAuthenticated = async () => {
    return this.client.isAuthenticated();
  }

  sendMessage = async (req: Request, res: Response) => {
    const {number, text} = req.body
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

  sendAudio = async (req: Request, res: Response) => {
    if (!req.file) {
      res.status(400).send('No se adjuntó ningún archivo de audio');
      return;
    }
    const {number} = req.body
    const audioBuffer = req.file.buffer;

    try {
        const response = await this.whatsAppClient.sendAudio(number, audioBuffer)
        res.send(response)
    }catch (error) {
        this.whatsAppClient.disconnect()
        res.send(`Error sending audio to ${number}: ${error}`)
    }
  }

}

export default ClientService
