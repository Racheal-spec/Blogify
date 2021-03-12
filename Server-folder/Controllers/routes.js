const Blog = require('../models/blog');


const getPost =  async (req, res)=>{
    try{
      const getBlogs = await Blog.find();
      res.send(getBlogs);
    } catch(error) {
      res.status(404).json({message: error.message});
    }
  }

const sendPost = async (req, res) => {
  try{
    const mainBlog = new Blog(req.body);
    mainBlog.save()
    res.send(mainBlog);
    res.redirect('/');
  }catch(error) {
    res.status(409).json({message: err.message});
  }
}

/*
 const sendPost = (req, res)=> {
  const mainBlog = new Blog(req.body);
  mainBlog.save()
 .then((data)=> {
   res.json(mainBlog);
   res.redirect('/');
 })
 .catch((err)=>{
  res.status(409).json({message: err.message});
 })
  }
 */   
module.exports= sendPost;
module.exports = getPost;