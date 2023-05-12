import { useState, useEffect } from "react";
import "../styles/signup.css";

const AddFoodModal = ({ onClose, onSubmit }) => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [freshDuration, setFreshDuration] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);

		const data = { name, price, freshDuration };
		onSubmit(data);

		setIsLoading(false);
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<div className="modal-background">
			<div className="modal">
				<div className="modal-header">
					<h2>Add Food</h2>
					<button className="modal-close-button" onClick={handleClose}>
						&times;
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="modal-body">
						<div className="form-group">
							<label htmlFor="name" className="modal-label">
								Food name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={(event) => setName(event.target.value)}
								required
								className="modal-input"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="price" className="modal-label">
								Price:
							</label>
							<input
								type="number"
								id="price"
								name="price"
								min="0"
								step="0.01"
								value={price}
								onChange={(event) => setPrice(parseFloat(event.target.value))}
								required
								className="modal-input"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="freshDuration" className="modal-label">
								Fresh duration (in hours):
							</label>
							<input
								type="number"
								id="freshDuration"
								placeholder="fresh duration of food"
								className="modal-input"
								min="0"
								value={freshDuration}
								onChange={(event) =>
									setFreshDuration(parseInt(event.target.value))
								}
								required
							/>
						</div>
					</div>
					<button
						type="submit"
						className="modal-submit-button"
						disabled={isLoading}
					>
						{isLoading ? "Adding..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddFoodModal;
