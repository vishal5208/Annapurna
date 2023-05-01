import "../styles/dashboard.css";
import HotelOwnerDataCard from "./HotelOwnerDataCard";
import Header from "./Header";
import Footer from "./Footer";
const Dashboard = ({ name, email, phone }) => {
	return (
		<div>
			<Header />
			<HotelOwnerDataCard name={name} email={email} phone={phone} />
			<Footer />
		</div>
	);
};

export default Dashboard;
