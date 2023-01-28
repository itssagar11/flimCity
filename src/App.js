import React, { useEffect, useState } from "react";
import "./css/App.css";
import MovieCard from "./movieCard";
//76703b18



const App= ()=>{
    const [movies,setMovies]= useState([]);
    const [search,setSearch]=useState("");
    const ApiFire= async(search)=>{
        const response= await fetch(`http://www.omdbapi.com/?apikey=76703b18&s=${search}`);
        const data=await response.json()
         console.log(data.Search);
         setMovies(data.Search);
        
    }

    useEffect(()=>{
        ApiFire("thor");
    },[])
 
    return (
        <div className="container">
            <label>
  <input type="text" required 
  value={search}
    onChange={(e)=>{
       setSearch(e.target.value);
      

    }}
  
  />
  <ul>
    <li s>s</li>
    <li e>e</li>
    <li a>a</li>
    <li r>r</li>
    <li c>c</li>
    <li h>h</li>
    
  </ul>
  
</label>
<button className="button"
    onClick={()=>{
        ApiFire(search)
    }
       
    }

>Search </button>
              <div className="movie-cards">
              <div className="hero-container">
                {   movies!=undefined  ?
                        movies.map((movie)=>{
                                // console.log(movie);
                                <MovieCard movie={movie} />
                            })

                :console.log("sd")
                    // movies.length>0?
                    // (movies.map((movie)=>{
                    //     // console.log(movie);
                    //     <MovieCard movie={movie} />
                    // })):console.log("E")
                 }
                
               
                
                </div>
             </div>
        </div>
    )
}

export default App;