# School Management API

## Overview
This project implements a School Management API using Node.js, Express.js, and MySQL. The API allows users to manage school data by adding new schools and retrieving a list of schools sorted by proximity to a specified location.

## Project Structure
```
school-management
├── src
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── schoolController.js
│   ├── models
│   │   └── school.js
│   └── routes
│       └── schoolRoutes.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```bash
 git clone https://github.com/dheerajsingh9334/school-management-api.git

   cd school-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add your MySQL database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. **Run the application**
   ```bash
   npm start
   ```

## API Endpoints

### Add School
- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345678,
    "longitude": 98.765432
  }
  ```
- **Description:** Adds a new school to the database. Validates input data before insertion.

### List Schools
- **Endpoint:** `/listSchools`
- **Method:** `GET`
- **Query Parameters:**
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Description:** Fetches all schools from the database, calculates their distance from the user's location, and returns a sorted list.
- 
```json
[
    {
        "id": 3,
        "name": "Marwadi University ",
        "address": "Rakot",
        "latitude": 40.7128,
        "longitude": -74.006,
        "distance": 1383.6978415388362
    },
    {
        "id": 1,
        "name": "ABC School",
        "address": "123 Main Street",
        "latitude": 28.7041,
        "longitude": 77.1025,
        "distance": 13086.844978377469
    },
    {
        "id": 2,
        "name": "Marwadi University ",
        "address": "Rajkot",
        "latitude": 28.7041,
        "longitude": 77.1025,
        "distance": 13086.844978377469
    },
    {
        "id": 5,
        "name": "IIT delhi",
        "address": "delhi",
        "latitude": 28.5457,
        "longitude": 77.1928,
        "distance": 13106.536617137275
    },
    {
        "id": 4,
        "name": "marwadi university",
        "address": "Rakot",
        "latitude": 22.3677,
        "longitude": 70.7922,
        "distance": 13394.597969504974
    }
```
App runs at http://localhost:5000

] 
## Testing
You can use Postman to test the API endpoints. A Postman collection will be provided for easy testing.

## License
This project is licensed under the MIT License.

