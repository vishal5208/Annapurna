import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import FoodGrid from "./Components/FoodGrid";
import Dashboard from "./Components/Dashboard";
import "./App.css";

import { Route, Switch } from "react-router-dom";

function App() {
	const name = "Vishal";
	const email = "john@example.com";
	const phone = "123-456-7890";

	return (
		<div className="main-container">
			<Switch>
				<Route exact path="/">
					<Header />
					<HeroBanner />
					<FoodGrid />
					<Footer />
				</Route>
				<Route
					exact
					path="/dashboard"
					render={() => <Dashboard name={name} email={email} phone={phone} />}
				/>
			</Switch>
		</div>
	);
}

export default App;
