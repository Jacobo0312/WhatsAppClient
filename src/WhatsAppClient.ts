import {Client as ClientClass, LocalAuth} from 'whatsapp-web.js'

class WhatsAppClient {
  private static instance: WhatsAppClient | null
  private client: ClientClass
  private authenticated: boolean
  private qr: string

  private constructor() {
    this.client = new ClientClass({
      authStrategy: new LocalAuth()
    })
    this.authenticated = false
    this.qr = ''
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

  public disconnect() {
    this.authenticated = false
    this.initialize()
  }

  public getQr(): string {
    return this.qr
  }

  public async sendMessage(number: string, text: string) {
    if (!this.authenticated) {
      return 'Client is not authenticated!'
    }

    await this.client.sendMessage(number + '@c.us', text)
    return `Message successfully sent to ${number}`
  }
}

export default WhatsAppClient
