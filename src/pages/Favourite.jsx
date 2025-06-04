import React from "react";
import { useMovieContext } from "../FavouriteContext";
import Movie from "../components/Movie.jsx"
function Favourite() {
	const { favourites } = useMovieContext();
if(favourites && favourites.length>0){
  return(
 <div className="min-h-screen bg-gray-700 mx-auto">

    <div className=" p-4  grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-8xl">
				{" "}
				{favourites.map((movie) => {
          return (
            <Movie movie={movie} key={movie.id} />
					);
				})}
</div>
        </div>

  )
}
  return(
    <div className="bg-gray-800 h-screen py-10 flex justify-center">
    
			<div className="w-60 p-4 h-30 bg-gray-700 rounded-sm ">
				<h2 className="text-red-600 text-center font-bold">
					No Favourite Movies Yet
				</h2>
				<p className="text-[10px] mt-5 text-center text-gray-300">
					Start adding movies to your favourites and they will appear here!
				</p>
			</div>
		</div>
)
  }


export default Favourite;
