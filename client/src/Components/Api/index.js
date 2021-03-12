import axios from 'axios';

const url = 'http://localhost:5000/api';

export const fetchBlogs = () => axios.get(url);

export const createdPost = (newPost) => axios.post(url, newPost);