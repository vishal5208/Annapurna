import { requestAccount } from "./commonConnectors";
import { contracts } from "../Constants";

const { ethers } = require("ethers");

export const registerCustomer = async ({ name, email, phoneNumber }) => {
	try {
		if (typeof window.ethereum === "undefined") {
			throw new Error("Please connect your wallet!");
		}
		await requestAccount();
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const customerRegistration = new ethers.Contract(
			contracts.CustomerRegistration[1],
			contracts.CustomerRegistration[0],
			signer
		);
		const tx = await customerRegistration.registerCustomer(
			name,
			email,
			phoneNumber
		);
		await tx.wait();
		return { tx, success: true };
	} catch (error) {
		let msg;
		if (error instanceof Error) {
			msg = error.message;
		} else {
			msg = "An unknown error occurred.";
		}
		return {
			success: false,
			msg,
		};
	}
};
