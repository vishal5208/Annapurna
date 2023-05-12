const { ethers } = require("ethers");

export const getEthAddress = async () => {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		// Prompt user for account connections
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const result = await signer.getAddress();
		return { result, success: true };
	} catch (error) {
		return {
			success: false,
			msg: error.message,
		};
	}
};

export const checkNetwork = async () => {
	const targetNetworkId = "0x7A69";

	if (window.ethereum) {
		const currentChainId = await window.ethereum.request({
			method: "eth_chainId",
		});

		// return true if network id is the same
		if (currentChainId === targetNetworkId) return { success: true };
		// return false is network id is different
		return {
			success: false,
			msg: "Please Open Metamask and Connect The Polygon network",
		};
	}
};

export const requestAccount = async (metaMask) => {
	try {
		if (typeof window.ethereum !== "undefined") {
			let provider = window.ethereum;
			// edge case if MM and CBW are both installed
			if (window.ethereum.providers?.length) {
				window.ethereum.providers.forEach(async (p) => {
					if (metaMask === true) {
						if (p.isMetaMask) provider = p;
					}
				});
			}
			await provider.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x7A69" }], // chainId must be in hexadecimal numbers
			});
			await provider.request({
				method: "eth_requestAccounts",
				params: [],
			});

			return { success: true };
		} else {
			return {
				success: false,
				msg: "please connect your wallet",
			};
		}
	} catch (error) {
		return {
			success: false,
			msg: error.message,
		};
	}
};

export const getUserWalletAddress = async () => {
	try {
		if (typeof window.ethereum !== "undefined") {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const address = await signer.getAddress();
			return { address, success: true };
		} else {
			return {
				success: false,
				msg: "Please connect your wallet!",
			};
		}
	} catch (error) {
		return {
			success: false,
			msg: error.message,
		};
	}
};