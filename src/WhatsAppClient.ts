import {Client as ClientClass, LocalAuth} from 'whatsapp-web.js'

class WhatsAppClient {
  private static instance: WhatsAppClient | null = null

  private client: ClientClass
  private authenticated = false
  private qr = ''

  private constructor() {
    this.client = new ClientClass({
      authStrategy: new LocalAuth()
    })
    this.initialize()
  }

  public static getInstance() {
    if (!WhatsAppClient.instance) {
      WhatsAppClient.instance = new WhatsAppClient()
    }
    return WhatsAppClient.instance
  }

  private initialize() {
    this.client.on('qr', (qr: string) => {
      this.qr = qr
      console.log('QR RECEIVED', qr)
    })

    this.client.on('ready', () => {
      this.authenticated = true
      console.log('Client is ready!')
    })

    this.client.initialize()
  }

  public isAuthenticated(): boolean {
    return this.authenticated
  }

  public async sendMessage(number: string, text: string) {
    if (!this.authenticated) {
      return 'Client is not authenticated!'
    }

    const res = await this.client
      .sendMessage(number + '@c.us', text)
      .then(response => {
        if (response.id.fromMe) {
          return `Message successfully sent to ${number}`
        }
      })
      .catch(error => {
        this.initialize()
        return `Error sending message to ${number}: ${error}`
      })

    return res
  }

  public getQr(): string {
    return this.qr
  }
}

export default WhatsAppClient
