import React, { useState } from "react";
import { Input } from "@web3uikit/core";
import { ConnectButton } from "@web3uikit/web3";
import HotelSignUpModal from "./HotelSignUpModal";
import CustomerSignUpModal from "./CustomerSignUpModal";

import "../styles/header.css";

const Header = () => {
	const [showHotelModal, setShowHotelModal] = useState(false);
	const [showHCustomerModal, setShowCustomerlModal] = useState(false);

	const handleHotelModalClose = () => {
		setShowHotelModal(false);
	};

	const handleHotelModalSubmit = (data) => {
		// Do something with the form data
		alert(data.name);
		setShowHotelModal(false);
	};

	const handleCustomerModalClose = () => {
		setShowCustomerlModal(false);
	};

	const handleCustomerModalSubmit = (data) => {
		// Do something with the form data
		alert(data.name);
		setShowCustomerlModal(false);
	};

	return (
		<header className="header">
			<p className="header-name">Annapurna</p>

			<div className="search-bar-div">
				<Input
					style={{
						backgroundColor: "white",
					}}
					label="Search for dish"
					placeholder="dish name"
				/>
				<button className="search-button">
					<img className="search-img" src="/images/search.svg" alt="search" />
				</button>
			</div>

			<div className="right-section">
				<div className="b1-div">
					<p className="login-button">Sign up</p>
					<div className="inside-login-button-div">
						<button
							onClick={() => setShowHotelModal(true)}
							className="colorful-button"
						>
							Hotel
						</button>
						<button
							onClick={() => setShowCustomerlModal(true)}
							className="colorful-button"
						>
							Customer
						</button>
					</div>
				</div>

				<ConnectButton />
			</div>

			{showHotelModal && (
				<HotelSignUpModal
					onClose={handleHotelModalClose}
					onSubmit={handleHotelModalSubmit}
				/>
			)}

			{showHCustomerModal && (
				<CustomerSignUpModal
					onClose={handleCustomerModalClose}
					onSubmit={handleCustomerModalSubmit}
				/>
			)}
		</header>
	);
};

export default Header;