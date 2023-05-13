import { getEthAddress, requestAccount } from "./commonConnectors";
import { contracts } from "../Constants";
let console = require("../console-browserify");

const { ethers } = require("ethers");

export const requestHotelRegistration = async ({
	name,
	description,
	owner,
	location,
}) => {
	try {
		if (typeof window.ethereum === "undefined") {
			throw new Error("Please connect your wallet!");
		}
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

export const getHotelOwnerData = async () => {
	try {
		if (typeof window.ethereum === "undefined") {
			throw new Error("Please connect your wallet!");
		}
		await requestAccount();

		const addr = await getEthAddress();
		console.log(addr.result);

		if (!ethers.utils.isAddress(addr.result)) {
			throw new Error("Invalid address format.");
		}

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const hotelRegistration = new ethers.Contract(
			contracts.HotelRegistration[1],
			contracts.HotelRegistration[0],
			signer
		);
		const data = await hotelRegistration.getHotelOwnerData(addr.result);

		return { data, success: true };
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
