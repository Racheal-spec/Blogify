const express = require('express');
const app = express()
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./Routes/Routes');

dotenv.config();

const port = 5000;
//This is mongodb database
 mongoose.connect(process.env.DB_ACCESS, {useNewUrlParser: true, useUnifiedTopology:true}, ()=> console.log('mongodb is connected'));
 
app.use(express.urlencoded({extended: true}));
  
//Initialize routes as a middleware
app.use(express.json()); //Activate bodyparser
app.use(cors());
app.use('/api', routesUrls);

app.listen(port, ()=> console.log(`server started at ${port}`))


 
