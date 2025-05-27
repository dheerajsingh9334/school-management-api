const db = require('../config/db');

// Function to add a new school
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validate input data
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding school', error: err });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: results.insertId });
    });
};

// Function to list schools sorted by proximity
exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate input data
    if (!latitude || !longitude) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
  return res.status(400).json({ message: 'Invalid latitude or longitude range' });
}


    const query = 'SELECT *, (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance FROM schools ORDER BY distance';
    db.query(query, [latitude, longitude, latitude], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching schools', error: err });
        }
        res.status(200).json(results);
    });
};