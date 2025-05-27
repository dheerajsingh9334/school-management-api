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
   git clone <repository-url>
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

## Testing
You can use Postman to test the API endpoints. A Postman collection will be provided for easy testing.

## License
This project is licensed under the MIT License.

