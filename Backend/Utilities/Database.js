import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: 'Youtube',
    })
    .then(() => console.log('Database is connected...'))
    .catch((error) => console.log(error));
};
