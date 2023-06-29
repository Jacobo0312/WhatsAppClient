import express from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import ClientRoutes from './controller/ClientRoutes';
dotenv.config({ path: __dirname+'/.env' });

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/client', ClientRoutes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});