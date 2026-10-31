import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import ContactRoutes from "./routes/contactRoutes.js"

import dns from "dns";

dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3427;

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

await connectDB();

ContactRoutes(app);
app.listen(PORT, () => {
  console.log("ContactRoutes server started on: " + PORT);
});