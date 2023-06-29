import { Router } from 'express';
const multer = require('multer');
import ClientService from "../service/ClientService";

const router = Router();
const upload = multer();
const controller = new ClientService();

router.post('/sendMessage', async (req, res) => {
    res.send(await controller.sendMessage(req, res));
})

router.post('/sendAudio', upload.single('audio'), async (req, res) => {
    res.send(await controller.sendAudio(req, res));
})

router.get('/isAuthenticated', async (req, res) => {
    res.send(await controller.isAuthenticated());
})

router.get('/getQR', async (req, res) => {
    res.send(await controller.getQR());
})

export default router;