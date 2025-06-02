
import React from "react";
import { useState } from "react";

function Movie({ movie }) {
    const [isFavourite, setIsFavourite] = useState(false);
    
    const Favourite = () => {
        setIsFavourite((prev) => !prev);
    };
    
    return (
<div className="bg-[#1a1a1a] rounded-sm flex flex-col hover:translate-y-[-5px] transition-transform duration-200 group h-[250px] sm:h-[220px] md:h-[280px]">
          <div className="relative w-full h-[70%]">
  <img className="w-full h-full object-cover" src={movie.img} alt={movie.title} />
</div>

            
            {/* Overlay that appears on hover */}
            <div className="text-xs p-1 absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end pointer-events-none">
                
                {/* Favorite button */}
                <button 
                    onClick={Favourite}  
                    className="absolute top-4 right-4 text-white text-[17px] p-2  w-10 h-10 flex items-center justify-center transition-colors duration-200 pointer-events-auto z-10"
                >
                    {isFavourite ? '❤️' : '🤍'}
                </button>
            </div>
            
            <div className="text-white px-4">
                <h3 className="text-[13px]">{movie.title}</h3>
                <p className="text-[10px]">{movie.release_Date}</p>
            </div>
        </div>
    );
}

export default Movie;