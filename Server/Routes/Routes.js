const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.post('/create', (req, res)=> {
  const mainBlog = new Blog(
    {
      title:req.body.title,
      snippet:req.body.snippet,
      content:req.body.content
    }
  )
  mainBlog.save()
 .then((data)=> {
  res.json(data);
 })
 .catch((err)=>{
  /*res.status(404).send(err);*/
  res.json(err);
 })
  })   

module.exports = router;