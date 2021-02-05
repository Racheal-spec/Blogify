const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const routesUrls = require('./Routes/Routes.js');

dotenv.config();
//This is mongodb database
const uri = process.env.DB_ACCESS;
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
const port = 5000;
mongoose.connect(uri, connectionParams)
.then(() => {
    app.listen(port, ()=> console.log(`server started at ${port}`))
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})
 
app.use(express.urlencoded({extended: true}));
  
//Initialize routes as a middleware
app.use(express.json()); //Activate bodyparser
app.use(cors());
app.use('/api', routesUrls);




 
