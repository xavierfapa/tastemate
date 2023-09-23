import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import recipiesRoutes from './routes/recipies.routes.js';
import matchesRoutes from './routes/matches.routes.js';

import { connectDB } from './db.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '500kb' }));

app.use('/api', authRoutes);
app.use('/api', recipiesRoutes);
app.use('/api', matchesRoutes);

connectDB();
app.listen(3000)
console.log('Server at port', 3000)