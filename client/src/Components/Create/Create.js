import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { postCreated } from '../Actions/Actions';
import './Create.scss';

const Create = () => {
 const [postData, setPostData] = useState({
     creator: '', 
     title: '', 
     snippets: '', 
     content: '', 
     tags: '', 
     selectedFile: ''

})
const dispatch = useDispatch();
    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(postCreated(postData));
    }

    const clearPosts = () => {

    }

    return(
        <div>
  <h1>New Blog</h1>
        <form action="#" onSubmit={handleSubmit}>
       <label>Creator:</label> 
       <input type="text" className="blog-input" onChange={(e)=> setPostData({...postData, creator: e.target.value})} value={postData.creator} required />
       <label>Title:</label> 
       <input type="text" className="blog-input" onChange={(e)=> setPostData({...postData, title: e.target.value})} value={postData.title} required />
       <label>Snippet:</label> 
       <textarea placeholder="write your snippet here..." onChange={(e)=> setPostData({...postData, snippets: e.target.value})} value={postData.snippets}   className="blog-snippet" required ></textarea>
       <label>Content:</label> 
       <textarea placeholder="write your blog here..." name="content" onChange={(e)=> setPostData({...postData, content: e.target.value})} value={postData.content}   className="blog-text" required ></textarea>
       <label>Tags:</label> 
       <input type="text" className="tag-input" onChange={(e)=> setPostData({...postData, tags: e.target.value})} value={postData.tags} required /> 
        <div className= "">
            <FileBase
            type="file"
            multiple={false}
            onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
            />
        </div>
        <button type="submit">Submit</button>
        <button onClick={clearPosts}>Clear</button>
        </form>
        </div>
      
    )
}

export default Create;