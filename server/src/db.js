import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// console.log('process.env:', process.env);
const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
const mongoDBURI = `mongodb://${MONGODB_HOST}:${MONGODB_DATABASE}`;
// console.log('MONGODB_URI:', MONGODB_URI);

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log('DB is connected')
//   } catch (error) {
//     console.log(error)
//   }
// };
export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/tastemate');
    console.log('DB is connected')
  } catch (error) {
    console.log(error)
  }
};

