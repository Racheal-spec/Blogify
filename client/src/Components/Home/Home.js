import React, { useState, useEffect } from 'react';

const Home = () => {

const[results, setResults] = useState([]);

useEffect(()=> {
        const url ='http://localhost:5000/api/create';
          fetch(url, {
            method: "POST",
            body: JSON.stringify(results),
            mode:'cors',
           headers: {"Content-type": "application/json"} 
        }
          )
        .then(res => console.log(res.json))
        .then((res)=> setResults(res.json))
        .catch((err)=> console.error(err))  

}, [])//eslint-disable-next-line



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