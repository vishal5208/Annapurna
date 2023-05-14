const Dotenv = require("dotenv-webpack");

module.exports = {
	// Your existing Webpack configuration
	plugins: [
		// Add the Dotenv plugin
		new Dotenv(),
		// Other plugins...
	],
	// Other Webpack configuration options...
};
