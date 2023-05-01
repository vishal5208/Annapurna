import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import FoodGrid from "./Components/FoodGrid";

import "./App.css";

function App() {
	return (
		<div className="main-container">
			<Header />
			<HeroBanner />
			<FoodGrid />
			<Footer />
		</div>
	);
}

export default App;
