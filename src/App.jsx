import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Navbar from "./components/Navbar";
function App() {
	return (
		<div>
			<Navbar/>
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourite" element={<Favourite />} />
			</Routes>
		</main>
		</div>
	);
}

export default App;
