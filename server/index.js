const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3001;

// Use the cors middleware to allow requests from all origins
app.use(cors());

async function main() {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sai@1234',
    database: 'siltable',
  });

  try {
    await db.connect(); // Connect to the database

    // Define your API routes here
    app.get('/api/registrations', async (req, res) => {
      try {
        const query = 'SELECT * FROM tableName';
        const [rows, fields] = await db.execute(query);
        res.json(rows);
      } catch (err) {
        console.error('Error querying the database: ' + err.message);
        res.status(500).send('Internal Server Error');
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Database connection failed: ' + err.message);
  }
}

main();