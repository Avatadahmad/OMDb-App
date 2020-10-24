//Entry point to the backend server runs on the port 5000

const express = require('express');
const bodyParser = require('body-parser');
//router file to fetch the movie based on search name
const router = require('./router');
//routerMovie file to fetch the single movie based on imdbID
const new_router = require('./routerMovie');
const PORT = 5000;
const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/moviesearch/",router);
app.use("/moviesearch/movielist/",new_router);
app.use(express.static('public'));


//Listen to port
app.listen(PORT,'127.0.0.1',() =>{
    console.log("Server is connecting");
})