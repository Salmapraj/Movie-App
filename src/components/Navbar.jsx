import React from "react";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav className="h-10 px-4 py-2  bg-gray-900">
			<div className="text-[12px] text-gray-200 font-serif flex justify-between flex-wrap">
				<div>
					<Link to="/">Movie App</Link>
				</div>
				<div className="flex space-x-4">
					<Link to="/" className="hover:text-blue-300 delay-150 transition">Home</Link>
					<Link to="/favourite" className="hover:text-blue-300 delay-150">Favourite</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
