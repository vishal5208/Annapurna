import { requestAccount } from "./commonConnectors";
import { contracts } from "../Constants";

const { ethers } = require("ethers");

export const requestHotelRegistration = async ({
	name,
	description,
	owner,
	location,
}) => {
	try {
		if (typeof window.ethereum !== "undefined") {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const hotelRegistration = new ethers.Contract(
				contracts.HotelRegistration[1],
				contracts.HotelRegistration[0],
				signer
			);

			const tx = await hotelRegistration.requestHotelRegistration(
				name,
				description,
				owner,
				location
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
