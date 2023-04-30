import { useState } from "react";
import "../styles/signup.css";

const CustomerSignUpModal = ({ onClose, onSubmit }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = { name, email, phoneNumber };
		onSubmit(data);
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<div className="modal-background">
			<div className="modal">
				<div className="modal-header">
					<h2>Customer Details</h2>
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
								placeholder="full name"
								id="name"
								className="modal-input"
								value={name}
								onChange={(event) => setName(event.target.value)}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email" className="modal-label">
								Email:
							</label>
							<input
								type="text"
								id="email"
								placeholder="email address"
								className="modal-input"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phoneNumber" className="modal-label">
								Phone Number:
							</label>
							<input
								type="text"
								id="phoneNumber"
								placeholder="phone number"
								className="modal-input"
								value={phoneNumber}
								onChange={(event) => setPhoneNumber(event.target.value)}
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

export default CustomerSignUpModal;
