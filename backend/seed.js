import mongoose from 'mongoose';
import Task from "./models/task.js";

dotenv.config();

// Tasks to be inserted into the database
const tasks = [];

const seedDatabase = async () => {
    try {

        // Insert new tasks
        const result = await Task.insertMany(tasks);
        console.log('Database seeded successfully:', result);
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
};


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL + '/tasks', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        
        // Run the seeding function
        await seedDatabase();
        
        // Close the connection after seeding
        await mongoose.connection.close();
        console.log('Database seeding completed and connection closed');
    } catch (error) {
        console.error('Error during database seeding:', error);
        process.exit(1);
    }
};

connectDB(); 

// Run the seeding script by running the following command
// node {relative path}/seed.js