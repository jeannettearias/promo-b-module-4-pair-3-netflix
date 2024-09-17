//import libraries
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.use(express.static('./web'));

// Endpoints
// server.get('/', (req, res) => {
//   res.send('Its everything is OK!!');
// });

// server.get('/', (req, res) => {

//   mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Passw0rd',
//     database: 'netflixpro'
//   })
//     .then(conn => {
//       conn.connection();
//     })
// })
//endpoint

server.get('/movies', (req, res) => {

  res.json(data);

})

const data =
{
  success: true,
  movies: [
    {
      id: '1',
      title: 'Gambita de dama',
      genre: 'Drama',
      image:
        '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg'
    },
    {
      id: '2',
      title: 'Friends',
      genre: 'Comedia',
      image:
        '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/friends.jpg'
    }
  ]
};
