import "../styles/hotelOwnerDataCard.css";
import starIcon from "../icons/star.svg";
import hotel1 from "../demoImages/h1.jpg";

const HotelOwnerDataCard = ({ name, email, phone }) => {
	return (
		<div className="main-hotel-owner-data-card-flex">
			<div className="main-food-card-div">
				{/* food-iamge  */}
				<div className="image-time-container">
					<img className="food-image" src={hotel1} alt="pizza" />
				</div>

				{/* about hote and food*/}
				<div className="food-hotel">
					<div className="hotel-details">
						<p className="hotel-name">Hotel Krishnan</p>
						<div className="rating">
							<img src={starIcon} alt="star" />
							<p>4.0</p>
						</div>
					</div>

					<p className="food-name">Name : {name}</p>
					<p className="food-name">Email : {email}</p>
					<p className="food-name">Phone : {phone}</p>
				</div>
			</div>
		</div>
	);
};

export default HotelOwnerDataCard;
