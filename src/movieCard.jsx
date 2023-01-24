import React from "react";
import "./css/movieCard.css"
const MovieCard=({  movie })=>{
    return (
      
              <div className="card">
                 <img src={movie.Poster} alt="Avatar" />
                <div className="container">
                    <h4><b>{movie.Title}</b></h4>
                    <p>{movie.Type}</p>
                </div>
                </div>
          
    )
}
export default MovieCard;