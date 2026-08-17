import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// Fallback seed doctors if DB is not populated or offline
const fallbackDoctors = [
  // General Physician
  { _id: '1', name: 'Dr. Rajesh Sharma', speciality: 'General Physician', fee: 500, rating: 4.9, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80' },
  { _id: '2', name: 'Dr. Sunita Patel', speciality: 'General Physician', fee: 500, rating: 4.8, image: 'https://images.unsplash.com/photo-1594824813566-88855ce78907?w=400&auto=format&fit=crop&q=80' },
  { _id: '3', name: 'Dr. Amit Verma', speciality: 'General Physician', fee: 500, rating: 4.7, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80' },
  // Dentist
  { _id: '4', name: 'Dr. Ananya Sen', speciality: 'Dentist', fee: 600, rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80' },
  { _id: '5', name: 'Dr. Vikram Malhotra', speciality: 'Dentist', fee: 600, rating: 4.8, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80' },
  { _id: '6', name: 'Dr. Neha Gupta', speciality: 'Dentist', fee: 600, rating: 4.7, image: 'https://images.unsplash.com/photo-1594824813566-88855ce78907?w=400&auto=format&fit=crop&q=80' },
  // Dermatologist
  { _id: '7', name: 'Dr. Priya Nair', speciality: 'Dermatologist', fee: 700, rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80' },
  { _id: '8', name: 'Dr. Rohan Mehta', speciality: 'Dermatologist', fee: 700, rating: 4.8, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80' },
  { _id: '9', name: 'Dr. Kavita Reddy', speciality: 'Dermatologist', fee: 700, rating: 4.8, image: 'https://images.unsplash.com/photo-1594824813566-88855ce78907?w=400&auto=format&fit=crop&q=80' },
  // Cardiologist
  { _id: '10', name: 'Dr. Suresh Joshi', speciality: 'Cardiologist', fee: 1000, rating: 5.0, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80' },
  { _id: '11', name: 'Dr. Meera Roy', speciality: 'Cardiologist', fee: 1000, rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80' },
  { _id: '12', name: 'Dr. Alok Chatterjee', speciality: 'Cardiologist', fee: 1000, rating: 4.9, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80' },
];

/**
 * GET /api/doctors
 * Optional query parameter: ?speciality=Dentist
 * Fetches doctors from MongoDB (or returns fallback data if database is empty/connecting)
 */
router.get('/', async (req, res) => {
  try {
    const { speciality } = req.query;
    const filter = {};

    if (speciality && speciality !== 'All') {
      // Case-insensitive query match for speciality
      filter.speciality = new RegExp(`^${speciality}$`, 'i');
    }

    // Attempt to query MongoDB
    const dbDoctors = await Doctor.find(filter);

    if (dbDoctors && dbDoctors.length > 0) {
      return res.json(dbDoctors);
    }

    // If MongoDB doesn't have documents yet, return filtered fallback list
    let filteredFallback = fallbackDoctors;
    if (speciality && speciality !== 'All') {
      filteredFallback = fallbackDoctors.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
    }
    return res.json(filteredFallback);
  } catch (error) {
    console.error('Error fetching doctors from MongoDB:', error.message);
    // Return fallback list on connection error so demo remains fully interactive
    const { speciality } = req.query;
    let filteredFallback = fallbackDoctors;
    if (speciality && speciality !== 'All') {
      filteredFallback = fallbackDoctors.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
    }
    res.json(filteredFallback);
  }
});

export default router;
