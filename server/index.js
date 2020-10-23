const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const router = require('./router');
const new_router = require('./routerMovie');

app.use("/moviesearch/",router);
app.use("/moviesearch/movielist/",new_router);
app.use(express.static('public'));



app.listen(PORT,'127.0.0.1',() =>{
    console.log("Server is connecting");
})