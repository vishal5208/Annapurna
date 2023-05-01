import FoodCard from "../Components/FoodCard";
import "../styles/foodGrid.css";

const FoodGrid = () => {
	return (
		<>
			<h1 className="heading">FOOD</h1>
			<div className="food-grid">
				<FoodCard />
				<FoodCard />
				<FoodCard />
				<FoodCard />
				<FoodCard />
				<FoodCard />
			</div>
		</>
	);
};

export default FoodGrid;
