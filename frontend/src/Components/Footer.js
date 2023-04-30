const Footer = () => {
	return (
		<footer
			style={{
				padding: "20px",
				textAlign: "center",
				position: "fixed",
				bottom: "2px",
				left: "60px",
				right: "60px",
				height: "20px",
				//backgroundColor: "rgb(15, 127, 255)",
				//	backgroundColor: "white",

				borderRadius: "10px",
			}}
		>
			<p
				style={{
					position: "absolute",
					top: "25%%",
					left: "50%",
					fontSize: "20px",
					transform: "translate(-50%, -50%)",
					color: "black",
					fontWeight: "bold",
				}}
			>
				&copy; 2023 Annapurna. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
