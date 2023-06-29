import WhatsAppClient from "../model/WhatsAppClient"

class Client {
    private readonly whatsAppClient: WhatsAppClient

    constructor() {
        this.whatsAppClient = WhatsAppClient.getInstance()
    }

    getQR = async () => {
        return this.whatsAppClient.getQr();
    }

    isAuthenticated = async () => {
        return this.whatsAppClient.isAuthenticated();
    }

    getWhatsappClient = () => {
        return this.whatsAppClient;
    }

}

export default Client
