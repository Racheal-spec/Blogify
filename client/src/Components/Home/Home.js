import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadBlogs } from '../Actions/Actions';
const Home = () => {

const dispatch = useDispatch();

useEffect(()=> {
  dispatch(loadBlogs());
}, [dispatch])//eslint-disable-next-line


const {BlogPosts} = useSelector(state => state.Posts);

    return(
        <div>
            <h1>Home</h1>
            
            {/*BlogPosts.length === 0 ? (
      <h1>You have no blog post at the moment</h1>
            )
         :(
           
         BlogPosts.map((result)=> (
            <div className="blog-div" key={result.id}>
             <h1>{result.title}</h1>
             <p>{result.snippet}</p>
             <p>{result.content}</p>
            </div>
            ))    
       
      <h1>Blog Posts</h1>
         )
         */} 
        </div>

    )
}

export default Home;