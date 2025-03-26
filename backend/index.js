import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './mongoconnect.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

await connectDB();

import router from './routes/index.js';
app.use("/tasks",router);

app.listen(PORT, () => {
    console.log('Server started at port ' + PORT);
});