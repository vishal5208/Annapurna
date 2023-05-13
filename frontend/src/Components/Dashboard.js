import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import HotelOwnerDataCard from "./HotelOwnerDataCard";
import Header from "./Header";
import Footer from "./Footer";
import AddFoodModal from "./AddFoodModal";
import FoodContainer from "./FoodContainer";
import { getHotelOwnerData } from "../BackendConnectors/hotelRegistrationConnector";
import { getEthAddress } from "../BackendConnectors/commonConnectors";
let console = require("../console-browserify");

const Dashboard = ({ name, email, phone }) => {
	const [showFoodModal, setShowFoodModal] = useState(false);
	const [hotelOwnerData, setHotelOwnerData] = useState({
		name: "",
		description: "",
		owner: "",
		location: "",
		rating: "",
		numRatings: "",
		status: "",
	});

	useEffect(() => {
		const fetchHotelOwnerData = async () => {
			const response = await getHotelOwnerData();
			if (response.success) {
				console.log(response.data);
				const [name, description, owner, location, rating, numRatings, status] =
					response.data;
				console.log(
					name,
					description,
					owner,
					location,
					rating.toString(),
					numRatings.toString(),
					status.toString()
				);
				setHotelOwnerData({
					name,
					description,
					owner,
					location,
					rating,
					numRatings,
					status,
				});
			} else {
				// Handle the case when the data retrieval is not successful
				console.error(response.msg);
			}
		};

		fetchHotelOwnerData();
	}, []);

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
				<HotelOwnerDataCard
					name={hotelOwnerData.name}
					description={hotelOwnerData.description}
					owner={hotelOwnerData.owner}
					location={hotelOwnerData.location}
					rating={hotelOwnerData.rating}
					status={hotelOwnerData.status}
				/>
				{}
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
