import { requestAccount } from "./commonConnectors";
import { contracts } from "../Constants";

const { ethers } = require("ethers");

export const registerCustomer = async ({ name, email, phoneNumber }) => {
	try {
		if (typeof window.ethereum !== "undefined") {
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
		} else {
			return {
				success: false,
				msg: "please connect your wallet!",
			};
		}
	} catch (error) {
		return {
			success: false,
			msg: error,
		};
	}
};
