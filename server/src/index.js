import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import recipiesRoutes from './routes/recipies.routes.js';

import { connectDB } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', recipiesRoutes);

connectDB();
app.listen(3000)
console.log('Server at port', 3000)