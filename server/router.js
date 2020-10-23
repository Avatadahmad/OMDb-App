const express = require('express');
const fetch = require('node-fetch');
const API_KEY = "52ab89f7";

let router = express.Router();

router.get('/:movie',(req,res)=>{
    const movie = req.params.movie
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`;
    console.log(url)
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

router.get('/:x',(req,res)=>{
    const movie_id = req.params.x
    const url = `http://www.omdbapi.com/?i=${movie_id}&apikey=52ab89f7`;
    console.log(url)
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
module.exports = router;