const hre = require("hardhat");
const contracts = require("../../frontend/src/Constants/contracts.json");
const HotelRegistrationAddr = contracts.HotelRegistration[1];
const CustomerRegistrationAddr = contracts.CustomerRegistration[1];
const hotelFoodMarketplaceAddr = contracts.HotelFoodMarketplace[1];

async function verifyContracts(contractInfo) {
	for (const info of contractInfo) {
		await hre.run("verify:verify", {
			address: info.address,
			constructorArguments: info.args || [],
		});
	}
}

const contractsToVerify = [
	{
		address: HotelRegistrationAddr,
		args: [],
	},

	{
		address: CustomerRegistrationAddr,
		args: [],
	},

	{
		address: hotelFoodMarketplaceAddr,
		args: [],
	},
];

verifyContracts(contractsToVerify);
