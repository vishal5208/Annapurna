import f1 from "../demoImages/1.avif";
import "../styles/foodCard.css";

const FoodCard = () => {
	return (
		<div className="main-box">
			<div className="image-div">
				<img src={f1} alt="food" />
			</div>
			<div className="food-details">
				<p>Ovenstory Pizza</p>
				<p>$40</p>
			</div>
			<div className="hotel-details">
				<p>Krishnan hotel</p>
				<p>4.0</p>
			</div>
		</div>
	);
};

export default FoodCard;
