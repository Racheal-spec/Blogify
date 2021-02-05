const Blog = require('../models/blog');


const getPost = ('/', (req, res)=>{
    res.send('This works');
  })

 const sendPost =('/create', (req, res)=> {
  const mainBlog = new Blog(
    {
      title:req.body.title,
      snippet:req.body.snippet,
      content:req.body.content
    }
  )
  mainBlog.save()
 .then((data)=> {
   res.json(mainBlog);
 })
 .catch((err)=>{
  /*res.status(404).send(err);*/
  res.json(err);
 })
  }) 
    
module.exports= sendPost;
module.exports = getPost;