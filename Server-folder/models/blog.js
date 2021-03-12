const mongoose = require('mongoose');
const Schemas = mongoose.Schema;

const blogSchema = new Schemas({
    creator: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    snippets: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },
    tags: {
        type: [String],
        required: true
    },
    selectedFile: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now      
    }
});

const Blog = mongoose.model('Blog',blogSchema, 'blogs');

module.exports= Blog;