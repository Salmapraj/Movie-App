
import React from "react";
import { useState } from "react";
import { useMovieContext } from "../FavouriteContext";

function Movie({ movie }) {
    const {isFav,addToFav, removeFav} = useMovieContext()

const favourite = isFav(movie.id) //return true or false

    const Favourite = (e) => {
        e.preventDefault()
        if(favourite) removeFav(movie.id)
            else addToFav(movie)
    };
    
    return (
<div div className="bg-[#1a1a1a] w-full max-w-[200px] sm:max-w-[200px] mx-auto rounded-md overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200 group">     
         <div className="relative w-full aspect-[2/3]">
  <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
</div>

            
            {/* Overlay that appears on hover */}
            <div className="text-xs p-1 absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end pointer-events-none">
                
                {/* Favorite button */}
                <button 
    onClick={Favourite}  
    className={`absolute top-4 right-4 text-white text-[16px] border rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 pointer-events-auto z-10
        ${favourite ? 'bg-red-600' : 'bg-gray-600'}
    `}
>
    🤍
</button>
            </div>
            
            <div className="text-white px-4 my-2">
                <h3 className="text-[13px] mb-2">{movie.title}</h3>
                <p className="text-[10px]">{movie.release_date ?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default Movie;