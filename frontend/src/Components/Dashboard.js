import { useState } from "react";
import "../styles/dashboard.css";
import HotelOwnerDataCard from "./HotelOwnerDataCard";
import Header from "./Header";
import Footer from "./Footer";
import AddFoodModal from "./AddFoodModal";
import FoodContainer from "./FoodContainer";
const Dashboard = ({ name, email, phone }) => {
	const [showFoodModal, setShowFoodModal] = useState(false);

	const handleFoodModalClose = () => {
		setShowFoodModal(false);
	};

	const handleFoodModalSubmit = (data) => {
		// Do something with the form data
		alert(data.name);
		setShowFoodModal(false);
	};

	return (
		<div>
			<Header />
			<div className="main-body">
				<HotelOwnerDataCard name={name} email={email} phone={phone} />
				<p>Click the button below to add food items to the marketplace.</p>

				<button
					onClick={() => setShowFoodModal(true)}
					className="colorful-button"
				>
					Add Food
				</button>

				{showFoodModal && (
					<AddFoodModal
						onClose={handleFoodModalClose}
						onSubmit={handleFoodModalSubmit}
					/>
				)}

				<FoodContainer />
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
