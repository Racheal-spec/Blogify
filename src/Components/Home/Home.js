import React, { useState, useEffect } from 'react';

const Home = () => {

const[results, setResults] = useState('');

useEffect(()=> {
    const fetchData = async () =>{
        const url = await fetch('http://localhost:5000/api/create');
        const response = await url.json();
        console.log(response);
        setResults(response);    
        }
  fetchData();      
}, [])// eslint-disable-next-line

    return(
        <div>
            <h1>Home</h1>
            {results.length === 0 ? (
      <h1>You have no blog post at the moment</h1>
            )
         :(
         results.map((result)=> (
            <div className="blog-div" key={result.id}>
             <h1>{result.title}</h1>
             <p>{result.snippet}</p>
             <p>{result.content}</p>
            </div>
            ))    
       
         )
        } 
        </div>

    )
}

export default Home;