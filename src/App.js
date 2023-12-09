import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {


  let[articles,setarticles] = useState([]);
  
  useEffect(()=>{ 
   
    fetch("https://newsapi.org/v2/everything?q=india&from=2023-12-08&apiKey=0314b96bc5214284900852ba25e96541")
    .then((Response)=>Response.json())
    .then((news)=>{
      setarticles(news.articles);
    }) 
    .catch((err)=>{
      console.log("err");
    })

  },[])
   

  return (
    <div className="App">
    <header className='header'>
      
      <h1 id='head'>ShOrT NeW's</h1>

      <input type='text' placeholder="search new's"/>

    </header>
    <section className='new-articles'>

    
    {
      articles.map((articles)=>{
        return(
          <News/>
        )

      })
    }
     
     </section>


    </div>
  );
}

export default App;
