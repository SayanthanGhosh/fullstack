import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from './models/Doctor.js';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/appointment_booking';

const seedDoctors = [
  // General Physician
  { name: 'Dr. Rajesh Sharma', speciality: 'General Physician', fee: 500, rating: 4.9, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Sunita Patel', speciality: 'General Physician', fee: 500, rating: 4.8, image: 'https://images.unsplash.com/photo-1594824813566-88855ce78907?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Amit Verma', speciality: 'General Physician', fee: 500, rating: 4.7, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80' },
  // Dentist
  { name: 'Dr. Ananya Sen', speciality: 'Dentist', fee: 600, rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Vikram Malhotra', speciality: 'Dentist', fee: 600, rating: 4.8, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Neha Gupta', speciality: 'Dentist', fee: 600, rating: 4.7, image: 'https://images.unsplash.com/photo-1594824813566-88855ce78907?w=400&auto=format&fit=crop&q=80' },
  // Dermatologist
  { name: 'Dr. Priya Nair', speciality: 'Dermatologist', fee: 700, rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Rohan Mehta', speciality: 'Dermatologist', fee: 700, rating: 4.8, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Kavita Reddy', speciality: 'Dermatologist', fee: 700, rating: 4.8, image: 'https://images.unsplash.com/photo-1594824813566-88855ce78907?w=400&auto=format&fit=crop&q=80' },
  // Cardiologist
  { name: 'Dr. Suresh Joshi', speciality: 'Cardiologist', fee: 1000, rating: 5.0, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Meera Roy', speciality: 'Cardiologist', fee: 1000, rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dr. Alok Chatterjee', speciality: 'Cardiologist', fee: 1000, rating: 4.9, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80' },
];

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB successfully.');

    // Clear existing doctors to avoid duplicates on re-runs
    await Doctor.deleteMany({});
    console.log('Cleared existing doctor records.');

    // Insert 12 seed doctors
    const insertedDoctors = await Doctor.insertMany(seedDoctors);
    console.log(`Successfully seeded ${insertedDoctors.length} doctors into MongoDB!`);

    await mongoose.disconnect();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding MongoDB database:', error.message);
    process.exit(1);
  }
}

seedDatabase();
