import React, { useState } from "react";
import Movie from "../components/Movie";
// import Gonegirl from "../assets/Gonegirl.jpg";
function Home() {
	const [mov, setMov] = useState("");
	
	const handleSearch=(e)=>{
		e.preventDefault() //input doesnt get cleared up
		alert(mov)
		setMov("")
	}
	const movies = [
		{
			id: 1,
			title: "Gone Girl",
			release_Date: 2016,
			// img: "",
		},
		{
			id: 2,
			title: "Phobia",
			release_Date: 2020,
			// img: "",
		},
		{
			id: 3,
			title: "Split",
			release_Date: 2021,
			// img: "",
		},
		{
			id: 4,
			title: "Glass",
			release_Date: 2015,
			// img: "",
		},
		{
			id: 5,
			title: "Hereditary",
			release_Date: 2017,
			// img: "",
		},

		{
			id: 6,
			title: "Unlocked",
			release_Date: 2016,
			// img: "",
		},
	];
	return (
		<div className=" bg-gray-700 w-full h-full
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
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 max-w-[1200px] mx-auto">
				{movies.map((movie, key) => {
					return(
					
					
			movie.title.toLowerCase().startsWith(mov) && <Movie movie={movie} key={movie.id} />


					)
	
						
					

				})}
			</div>
		</div>
	);
}

export default Home;
