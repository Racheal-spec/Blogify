import React, {useState } from 'react';
import './Create.scss';

const Create = () => {

const[body, setBody] = useState("");

const updateBody = (event) => {
    setBody(event.target.value);
  }
const handleSubmit = (event) => {
    setBody(event.target.value);  
    console.log(event.target.value);
}

    return(
        <div>
  <h1>New Blog</h1>
        <form onSubmit={handleSubmit}>
       <label>Title:</label> 
       <input type="text" className="blog-input" id="input-field" value={body} onChange={updateBody} required />
       <label>Snippet:</label> 
       <textarea placeholder="write your snippet here..." className="blog-snippet" id="input-field" value={body} onChange={updateBody} required ></textarea>
       <label>Body:</label> 
       <textarea placeholder="write your blog here..." className="blog-text" id="input-field" value={body} onChange={updateBody} required ></textarea>
        <button>Submit</button>
        </form>
        </div>
      
    )
}

export default Create;