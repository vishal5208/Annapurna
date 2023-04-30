import { useState } from "react";
import "../styles/signup.css";

const HotelSignUpModal = ({ onClose, onSubmit }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [owner, setOwner] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = { name, description, owner, location };
		onSubmit(data);
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<div className="modal-background">
			<div className="modal">
				<div className="modal-header">
					<h2>Hotel Details</h2>
					<button className="modal-close-button" onClick={handleClose}>
						&times;
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="modal-body">
						<div className="form-group">
							<label htmlFor="name" className="modal-label">
								Name:
							</label>
							<input
								type="text"
								id="name"
								placeholder="full name"
								className="modal-input"
								value={name}
								onChange={(event) => setName(event.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="modal-label">
								Description:
							</label>
							<textarea
								id="description"
								placeholder="about hotel"
								className="modal-input"
								value={description}
								onChange={(event) => setDescription(event.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="owner" className="modal-label">
								Owner:
							</label>
							<input
								type="text"
								id="owner"
								placeholder="wallet address"
								className="modal-input"
								value={owner}
								onChange={(event) => setOwner(event.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="location" className="modal-label">
								Location:
							</label>
							<input
								type="text"
								id="location"
								placeholder="hotel location"
								className="modal-input"
								value={location}
								onChange={(event) => setLocation(event.target.value)}
								required
							/>
						</div>
					</div>
					<button type="submit" className="modal-submit-button">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default HotelSignUpModal;
