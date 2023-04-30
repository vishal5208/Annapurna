import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
	return (
		<div
			style={{
				padding: "10px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
			}}
		>
			<Header />
			<HeroBanner />
			<Footer />
		</div>
	);
}

export default App;
