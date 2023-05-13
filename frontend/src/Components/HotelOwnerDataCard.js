import "../styles/hotelOwnerDataCard.css";
import starIcon from "../icons/star.svg";
import hotel1 from "../demoImages/h1.jpg";

const HotelOwnerDataCard = ({
	name,
	description,
	owner,
	location,
	rating,
	status,
}) => {
	let statusMessage;

	switch (status) {
		case 0:
			statusMessage = "Pending";
			break;
		case 1:
			statusMessage = "Approved";
			break;
		case 2:
			statusMessage = "Rejected";
			break;
		default:
			statusMessage = "Unknown status";
	}

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
						<p className="hotel-name">{name}</p>
						<div className="rating">
							<img src={starIcon} alt="star" />
							<p>{rating.toString()}</p>
						</div>
					</div>
					<div className="hotel-owner-details">
						<p className="food-name">
							Owner:{" "}
							{`${owner.substring(0, 5)}...${owner.substring(
								owner.length - 5,
								owner.length
							)}`}
						</p>
						<p className="food-name">Location : {location}</p>
						<p className="food-name">status : {statusMessage}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelOwnerDataCard;
