const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/movies').get((request, response) => {
  response.send(MOVIES);
});

app.route('/api/movies').post((request, response) => {
  let movie = request.body;

  const firstId = MOVIES ? Math.max.apply(null, MOVIES.map(movieIterator => movieIterator.id)) + 1 : 1;
  movie.id = firstId;
  MOVIES.push(movie);


  response.status(201).send(movie);
});

app.route('/api/movies/:id').put((request, response) => {
  const movieId = +request.params['id'];
  const movie = request.body;

  const index = MOVIES.findIndex(movieIterator => movieIterator.id === movieId);
  MOVIES[index] = movie;

  response.status(200).send(movie);
});

app.route('/api/movies/:id').get((request, response) => {
  const movieId = +request.params['id'];

  response.status(200).send(MOVIES.find(movieIterator => movieIterator.id === movieId));
});

app.route('/api/movies/:id').delete((request, response)=> {
  const movieId = +request.params['id'];
  MOVIES = MOVIES.filter(movieIterator => movieIterator.id !== movieId);

  response.status(204).send({});
});

var MOVIES = [
  {
      id: 1,
      name: 'shrek',
      imageUrl: '/assets/img/03.jpg',
      price: 10.00,
      room: 'CS-1',
      duration: 154,
      date: '01/02/2002', /*MM/dd/yyyy */
      rating: 5,
  },
  {
    id: 2,
    name: 'bee-movie',
    imageUrl: '/assets/img/05.jpg',
    price: 10.00,
    room: 'CS-1',
    duration: 154,
    date: '01/02/2002',
    rating: 5,
  },
  {
    id: 3,
      name: 'todo mundo em pânico',
      imageUrl: '/assets/img/01.jpg',
      price: 15.00,
      room: 'AB-1',
      duration: 180,
      date: '01/02/2020',
      rating: 4,
  },
  {
    id: 4,
      name: 'o preço do amanhã',
      imageUrl: '/assets/img/02.jpg',
      price: 20.00,
      room: 'BA-1',
      duration: 210,
      date: '02/02/2020',
      rating: 4.5,
  },
  {
    id: 5,
    name: 'rocket League: O filme',
    imageUrl: '/assets/img/04.jpg',
    price: 10.00,
    room: 'CJ-1',
    duration: 154,
    date: '01/02/2002',
    rating: 1.5,
  },
  {
    id: 5,
    name: 'kung-Fu Panda',
    imageUrl: '/assets/img/06.jpg',
    price: 25.00,
    room: 'CJ-1',
    duration: 200,
    date: '01/02/2002',
    rating: 3,
  }
];
