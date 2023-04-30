import React from "react";

import { Button, Hero, Typography } from "@web3uikit/core";

const HeroBanner = () => {
	return (
		<Hero
			align="center"
			backgroundColor="tranparent"
			customImage={{
				url: "/images/eyes.svg",
			}}
			height="400px"
			rounded="20px"
			style={{
				margin: "35px",
				padding: "45px",
				zIndex: "-1",
			}}
		>
			<React.Fragment key=".0">
				<Typography color="#000080" variant="h2">
					Order food from favourite restaurants near you.
				</Typography>
				<Typography color="#000080" variant="h1">
					Looking to get started?
				</Typography>
				<Button
					customize={{
						backgroundColor: "#000080",
						border: "1px solid white",
						color: "#FFFFFF",
					}}
					iconLayout="trailing"
					isTransparent
					text="Get started"
					theme="custom"
				/>
			</React.Fragment>
		</Hero>
	);
};

export default HeroBanner;
