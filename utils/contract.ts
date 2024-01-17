import ContractAbi from "../artifacts/contracts/CrypTube.sol/CrypTube.json"
import { ethers } from "ethers"
import { CONTRACT_ADDRESS } from "../constants"

export default async function getContract() {
	const { ethereum } = window as any
	const provider = new ethers.BrowserProvider(ethereum)
	const signer = await provider.getSigner()
	let contract = new ethers.Contract(
		CONTRACT_ADDRESS,
		ContractAbi.abi,
		signer
	)
	console.log(contract)
	return contract
}
