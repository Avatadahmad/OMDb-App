const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const API_KEY = "52ab89f7";


router.get('/:movieName',(req,res)=>{
    const movie_id = req.params.movieName
    const url = `http://www.omdbapi.com/?i=${movie_id}&apikey=${API_KEY}`;
    //fetch call to get data from omdb api
    //fetch to get the individual movie based on imdb_id
    fetch(url)
        .then(response =>response.json())
        .then(data =>{
            console.log("data:",data);
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
//Export the module
module.exports = router;