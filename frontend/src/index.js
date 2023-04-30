import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MoralisProvider initializeOnMount={false}>
			<App />
		</MoralisProvider>
	</React.StrictMode>
);
