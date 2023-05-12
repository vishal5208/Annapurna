import FoodCard from "./FoodCard";
import "../styles/foodConatiner.css";

const FoodContainer = () => {
	// const [foods, setFoods] = useState([]);

	// const handleAddFood = (newFood) => {
	// 	setFoods([newFood, ...foods]);
	// };

	return (
		<div>
			<h1>Recently added foods</h1>
			<div className="food-container">
				<FoodCard />
				<FoodCard />
				<FoodCard />
			</div>
		</div>
	);
};

export default FoodContainer;
