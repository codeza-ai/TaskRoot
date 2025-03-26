import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connects to the MongoDB database using the MONGO_URL environment variable
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL + '/tasks');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error during database seeding:', error);
        process.exit(1);
    }
};

export default connectDB;