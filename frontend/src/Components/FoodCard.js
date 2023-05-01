import f1 from "../demoImages/1.avif";
import "../styles/foodCard.css";
import starIcon from "../icons/star.svg";

const FoodCard = () => {
	return (
		<div className="main-food-card-div">
			{/* food-iamge  */}
			<div className="image-time-container">
				<img className="food-image" src={f1} alt="pizza" />
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

				<div className="food-details">
					<p className="food-name">Pizza</p>
					<p className="price">&#x20B9;30</p>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
