import React from "react";
import "./css/App.css";
import MovieCard from "./movieCard";
//76703b18

const movie={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
const ApiFire= async(search)=>{
    const response= await fetch(`http://www.omdbapi.com/?apikey=76703b18&s=${search}`);
    const data=await response.json()
    console.log(data.Search);
}
const App= ()=>{
    ApiFire("spiderman")
    return (
        <div className="container">
            <input
                placeholder="Search For Movie"

            
            />
              <div className="movie-card">
                <MovieCard movie={movie} />
             </div>
        </div>
    )
}

export default App;