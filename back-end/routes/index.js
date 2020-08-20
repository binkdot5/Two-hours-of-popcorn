var express = require('express');
var router = express.Router();

/* Mongo models */
var movie = require('../models/Movie');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: '2 Hours of Popcorn' });
});

/* API route page. */
router.get('/api/movies', function(req, res, next) {
  movie.find(function(err, movies){
    if(err) return next(err);
    res.json(movies);
  });
});

/* Get by 'id' API route */
router.get('/api/movie/:id', function(req, res, next) {
  movie.findById(req.params.id, function(err, movie){
    if(err) return next(err);
    res.json(movie);
  });
});

module.exports = router;
