const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.post('/Create', (req, res)=> {
    const blog = new Blog({
      title:req.body.title,
      snippet:req.body.snippet,
      body:req.body.body
    })
    blog.save()
    .then((result)=> {
        res.redirect('/');
    })
    .catch((err)=> console.log(err));
})    

router.get('/api/blogs', (req, res)=> {
    //This is suppose to be a database e.g mongodb
    const blogs = [
       {id: 123445, title: 'tomi', body: 'swimming'},
       {id: 123645, title: 'tina', body: 'cooking'},
       {id: 123745, title: 'thanni', body: 'coding'}
    ]
    res.json(blogs);
})

module.exports = router;