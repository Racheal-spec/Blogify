const mongoose = require('mongoose');
const Schemas = mongoose.Schema;

const blogSchema = new Schemas({
    title: {
        type: String,
        required:true
    },
    snippet: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now      
    }
});

const Blog = mongoose.model('newblog',blogSchema);

module.exports= Blog;