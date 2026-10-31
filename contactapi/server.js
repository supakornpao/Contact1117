import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import dns from "dns";

dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3427;


app.use(express.json());
mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log('✅ MongoDB connected'))
 .catch((err) => console.error('❌ MongoDB connection error:', err.message));
app.get('/', (req, res) => res.send('EGCI427 API with MongoDB'));
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));