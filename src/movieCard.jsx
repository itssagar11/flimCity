import React from "react";
import "./css/movieCard.css"
const MovieCard=({  movie })=>{
    return (
      
		<div className="main-container">
			<div className="poster-container">
				<a href="#"><img src={movie.Poster} className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h2 className="ticket__movie-title">{movie.Title}</h2>
					<p className="ticket__movie-slogan">
                    {movie.Type}
					</p>
					
					<p className="ticket__old-price">{movie.Year}</p>
					<button className="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>

        
        

		

          
    )
}
export default MovieCard;