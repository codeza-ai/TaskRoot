import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './mongoconnect.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 4000;

// Only accept requests from the frontend url
app.use(cors({
    origin: 'https://task-root.vercel.app'
}));
app.use(bodyParser.json());

// Connect to the database
await connectDB();

import router from './routes/index.js';
app.use("/tasks",router);

app.listen(PORT, () => {
    console.log('Server started at port ' + PORT);
});