import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import recipiesRoutes from './routes/recipies.routes.js';
import matchesRoutes from './routes/matches.routes.js';
import messagesRoutes from './routes/messages.routes.js';

import { connectDB } from './db.js';


const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json({ limit: '500kb' }));

app.use('/api', authRoutes);
app.use('/api', recipiesRoutes);
app.use('/api', matchesRoutes);
app.use('/api', messagesRoutes);

connectDB();
app.listen(3000)
console.log('Server at port', PORT)