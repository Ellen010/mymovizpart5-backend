var express = require('express');
var router = express.Router();
require('dotenv').config();

const fetch = require('node-fetch');

const api_key = process.env.OWM_API_KEY;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afc5b1468bc74a3aed88676bc902a896`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});

module.exports = router;
