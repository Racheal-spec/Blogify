const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express()
const port = 5000;
//This is mongodb database
const uri = "mongodb+srv://RachelBlogify:FOLLYtee&&0852$@cluster0.edviy.mongodb.net/Blogifyy?retryWrites=true&w=majority";
 mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})
     .then((result)=> app.listen(port, ()=> console.log(`server started at ${port}`)))
     .catch((err)=>console.log(err));
 
     //create new blogs
 app.get('/add-blogs', (req, res)=> {
     const blog = new Blog({
        title: "new blog2",
        snippet: "check it out now",
        body: " This is the body"
     })
     blog.save()
     .then((result)=> {
         res.json(result);
     })
     .catch((err)=> console.log(err));
 })    

//get all blogs
app.get('/', (req, res)=> {
    res.redirect('/blogs')
})
app.get('/blogs', (req, res)=> {
    Blog.find()
    .then((result)=> {
        res.render('home.js', {title: 'Home', results: result})
    })
    .catch((err)=> console.log(err)); 
})

//get a single blog
/*
app.get('/one-blog', (req, res)=> {
    Blog.findById('60151a5baeb163443449f2fb')
    .then((result)=> {
        res.json(result);
    })
    .catch((err)=> console.log(err));
    
})
*/
/*
 app.get('/api/blogs', (req, res)=> {
     //This is suppose to be a database e.g mongodb
     const blogs = [
        {id: 123445, title: 'tomi', body: 'swimming'},
        {id: 123645, title: 'tina', body: 'cooking'},
        {id: 123745, title: 'thanni', body: 'coding'}
     ]
     res.json(blogs);
 })
*/
app.use(cors());