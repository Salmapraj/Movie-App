import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";

function Home() {
	const [mov, setMov] = useState("");
	const [movies, setMovies] = useState([]);
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

	const handleSearch = async (e) => {
  e.preventDefault();
  
  // Don't proceed if search query is empty
  if (!mov.trim()) {
    return; // Exit early if empty search
  }

  try {
    setLoading(true);
    setError(null); // Clear previous errors
    
    const searchResults = await searchMovies(mov);
    setMovies(searchResults); // Update movies state with search results
    setMov(""); // Clear search input after successful search
    
  } catch (err) {
    setError("Failed to search movies");
    console.error("Search error:", err); // Better error logging
    
  } finally {
    setLoading(false); // Ensure loading state is reset
  }
};

	return (
		<div
			className=" bg-gray-700 w-full h-full pb-4">
			<form
				action="Post"
				onSubmit={handleSearch}
				className="flex justify-center "
			>
				<input
					type="text"
					placeholder="Movie Name"
					className="  text-xs placeholder-gray-400 px-3 py-2 rounded-sm  w-70 border-gray-400 bg-gray-600 mt-7"
					value={mov}
					onChange={(e) => setMov(e.target.value)}
				/>
				<button
					type="submit"
					className=" mt-7 text-[10px] px-1 py-0 w-[60px] rounded-xs ml-3 bg-blue-500 text-gray-300 hover:bg-blue-700 transition "
				>
					Search
				</button>
			</form>

			{error && <div> {error}</div>}
			{loading ? <p>Loading...</p>:<div className="mt-8 mx-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-8xl">
				{" "}
				{movies.map((movie) => {
					return (
						<Movie movie={movie} key={movie.id} />
					);
				})}
			</div>}
			
		</div>
	);
}

export default Home;
