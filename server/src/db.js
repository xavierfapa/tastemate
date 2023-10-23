import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const { DB_HOST, DB_NAME } = process.env;
const mongoDBURI = `mongodb://${DB_HOST}/${DB_NAME}`;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURI);
    console.log('DB is connected')
  } catch (error) {
    console.log(error)
  }
};

