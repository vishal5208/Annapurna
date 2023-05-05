import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import FoodGrid from "./Components/FoodGrid";
import Dashboard from "./Components/Dashboard";
import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
	const name = "Vishal";
	const email = "john@example.com";
	const phone = "123-456-7890";

	return (
		<div className="main-container">
			<Routes>
				<Route
					path="/"
					element={[<Header />, <HeroBanner />, <FoodGrid />, <Footer />]}
				/>

				<Route
					path="/dashboard"
					element={<Dashboard name={name} email={email} phone={phone} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
