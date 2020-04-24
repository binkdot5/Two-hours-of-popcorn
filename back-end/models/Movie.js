var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    title: String,
    year: String,
    summary: String,
    director: String,
    image: String,
    genres: Array,
    ids: [{slug: String, imdb: String}],
}, {
    collection: 'movies'
});

module.exports = mongoose.model('Movie', MovieSchema);