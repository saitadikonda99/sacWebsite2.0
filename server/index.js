const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sai@1234',
  database: 'Sac',
});


db.connect((err) => {
  if (err) {
    throw err;
  } 
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());

const createTableQuery = `
CREATE TABLE IF NOT EXISTS sac_feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universityId VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    MajorArea VARCHAR(255),
    branch VARCHAR(255),
    Suggestions VARCHAR(255),
    Staff_Interaction INT,
    Overall_Satisfaction VARCHAR(255)
)
`;

const cors = require('cors');

app.use(cors());

db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created or already exists');
  }
});

app.post('/api/submitFeedback', (req, res) => {
  const {
    universityId, 
    name,
    email,
    MajorArea,
    branch,
    Suggestions,
    Staff_Interaction,
    Overall_Satisfaction,
  } = req.body;

  const insertQuery = `
    INSERT INTO sac_feedback (
      universityId,  
      name,
      email,
      MajorArea,
      branch,
      Suggestions,
      Staff_Interaction,
      Overall_Satisfaction
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertQuery,
    [
      universityId,  
      name,
      email,
      MajorArea,
      branch,
      Suggestions,
      Staff_Interaction,
      Overall_Satisfaction,
    ],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data' });
      } else {
        console.log('Data inserted successfully');
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    }
  );
});

app.get('/api/feedbackdata', (req, res) => {
  const { password } = req.query;
  if (password === '123') {
    const fetchDataQuery = 'SELECT * FROM sac_feedback';
    db.query(fetchDataQuery, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Error fetching data' });
      } else {
        res.status(200).json(result);

      }
    });
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
