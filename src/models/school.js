const mysql = require('mysql');
const db = require('../config/db');

// Define the School model
const School = {
    create: (schoolData, callback) => {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.query(query, [schoolData.name, schoolData.address, schoolData.latitude, schoolData.longitude], callback);
    },

    findAll: (callback) => {
        const query = 'SELECT * FROM schools';
        db.query(query, callback);
    }
};

module.exports = School;