import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://mongodb:27017/CarShop',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;