//Register for OMDB API

const express = require('express');
const fetch = require('node-fetch');
const API_KEY = "52ab89f7";
//Install router function
let router = express.Router();

//Get the movie details with below function
//web address will localhost:5000//moviesearch/movie
//replace movie with any movie name

router.get('/:movie',(req,res)=>{
    const movie = req.params.movie
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`;
    console.log(url)
    fetch(url)
        .then(response =>response.json())
        .then(data =>{
            //Access-Control-Allow-Origin added to tackle CORS
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(data)
        })
        .catch(err =>{
            console.log(err);
        })
        .catch(err =>{
            console.log(err);
        })      
})

//Export your module
module.exports = router;