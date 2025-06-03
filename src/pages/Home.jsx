import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { searchMovies } from "../../services/api";
import { getPopularMovies } from "../../services/api";



function Home() {

	const [mov, setMov] = useState("");
	const [movies,setMovies] =useState([])
	 const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies on initial render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load popular movies");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadPopularMovies();
  }, []); // Empty dependency array means this runs once on mount



	const handleSearch=(e)=>{
		e.preventDefault() //input doesnt get cleared up
		alert(mov)
		setMov("")
	}
	
	
	return (
		<div className=" bg-gray-700 w-full h-full pb-4
">
			<form action="Post" onSubmit={handleSearch} className="flex justify-center ">
				<input
					type="text"
					placeholder="Movie Name"

					className="  text-xs placeholder-gray-400 px-3 py-1 rounded-sm  w-65 border-gray-400 bg-gray-600 mt-7" value={mov}
				
				onChange={(e)=> setMov(e.target.value)}/>
				<button
					type="submit"
					className=" mt-7 text-[10px] px-2 rounded-xs ml-3 bg-blue-500 text-gray-300 hover:bg-blue-700 transition "
				>
					Search
				</button>
			</form>
<div className="mt-8 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-8xl">				{movies.map((movie, key) => {
					return(
					
					
			movie.title.toLowerCase().startsWith(mov) && <Movie movie={movie} key={movie.id} />


					)
	
						
					

				})}
			</div>
		</div>
	);
}

export default Home;
