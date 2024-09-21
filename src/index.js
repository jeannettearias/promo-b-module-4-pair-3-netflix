//import libraries
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;

server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


//Endpoints
server.get('/', (req, res) => {
  res.send('Its everything is OK!!');
});

async function getConnection() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_localhost,
      port: process.env.DB_port,
      user: process.env.DB_user,
      password: process.env.DB_password,
      database: process.env.DB_database,
    });

    await conn.connect();

    return conn;
  }
  catch (error) {
    console.log(error);

    return null;
  }
}

server.get('/movies', async (req, res) => {
  const conn = await getConnection();

  if (!conn) {
    res.status(500).send('Connection error!');
    return;
  }

  //query to BD
  const [results, columns] = await conn.query('Select * from movies;');

  console.log(results);

  const data = {
    success: true,
    movies: results
  };
  res.json(data);

  conn.close();
});





