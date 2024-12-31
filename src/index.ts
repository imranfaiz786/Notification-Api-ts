import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db"; // Make sure dbConnect is defined correctly
import NotificationRoutes from './routes/notification.routes';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Running mode:', NODE_ENV);

// Establish DB connection using dbConnect
dbConnect();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
app.use('/api', NotificationRoutes);  // "/api/" is now just "/api" to avoid duplication in route paths

/// Start server
const PORT = process.env.PORT || 5008;  // Ensure PORT is available in .env file
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
