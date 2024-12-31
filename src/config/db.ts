// db.ts
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config(); // This will load the variables from the .env file


const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION || '', {
      // Any additional options for MongoDB connection (if needed)
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default dbConnect;