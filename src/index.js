//import libraries
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

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
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Passw0rd',
      database: 'netflixpro'
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





