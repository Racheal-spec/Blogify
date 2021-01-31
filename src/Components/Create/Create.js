import React from 'react';
import './Create.scss';

const Create = () => {


    return(
        <div>
  <h1>New Blog</h1>
        <form action="/" method="POST">
       <label>Title:</label> 
       <input type="text" className="blog-input" name="title" id="input-field" required />
       <label>Snippet:</label> 
       <textarea placeholder="write your snippet here..." name="snippet" className="blog-snippet" id="input-field" required ></textarea>
       <label>Body:</label> 
       <textarea placeholder="write your blog here..." name="body" className="blog-text" id="input-field"required ></textarea>
        <button>Submit</button>
        </form>
        </div>
      
    )
}

export default Create;