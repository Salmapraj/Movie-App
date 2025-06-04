import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./FavouriteContext";
function App() {
	return (
		<MovieProvider>
			<Navbar/>
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourite" element={<Favourite />} />
			</Routes>
		</main>
		</MovieProvider>
	);
}

export default App;
