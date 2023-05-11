const hre = require("hardhat");
const fs = require("fs");

let hotelRegistration, customerRegistration, hotelFoodMarketplace;

async function main() {
	// hotel registration
	const HotelRegistration = await hre.ethers.getContractFactory(
		"HotelRegistration"
	);
	hotelRegistration = await HotelRegistration.deploy();
	await hotelRegistration.deployed();

	// CustomerRegistration
	const CustomerRegistration = await hre.ethers.getContractFactory(
		"CustomerRegistration"
	);
	customerRegistration = await CustomerRegistration.deploy();
	await customerRegistration.deployed();

	// inititalze hotelRegistration
	await hotelRegistration.updateContractAddresses(customerRegistration.address);

	//HotelFoodMarketplace
	const HotelFoodMarketplace = await hre.ethers.getContractFactory(
		"HotelFoodMarketplace"
	);
	hotelFoodMarketplace = await HotelFoodMarketplace.deploy();
	await hotelFoodMarketplace.deployed();

	await hotelFoodMarketplace.updateContractAddresses(
		customerRegistration.address,
		hotelRegistration.address
	);

	console.log("HotelRegistration is deployed at : ", hotelRegistration.address);

	console.log(
		"CustomerRegistration is deployed at : ",
		customerRegistration.address
	);

	console.log(
		"HotelFoodMarketplace is deployed at : ",
		hotelFoodMarketplace.address
	);

	// Get contract ABIs
	const hotelRegistrationAbi = HotelRegistration.interface.format("json");
	const customerRegistrationAbi = CustomerRegistration.interface.format("json");
	const hotelFoodMarketplaceAbi = HotelFoodMarketplace.interface.format("json");

	// Write contract addresses and ABIs to file
	const contracts = {
		HotelRegistration: [hotelRegistrationAbi, hotelRegistration.address],
		CustomerRegistration: [
			customerRegistrationAbi,
			customerRegistration.address,
		],
		HotelFoodMarketplace: [
			hotelFoodMarketplaceAbi,
			hotelFoodMarketplace.address,
		],
	};
	fs.writeFileSync(
		"../frontend/src/Constants/contracts.json",
		JSON.stringify(contracts, null, 2)
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
