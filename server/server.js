import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import cookieParser from 'cookie-parser';

import connectDB from './config/mongodb.js' 
import authRouter from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

app.get('/', (req, res) => res.send('API working'))
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})