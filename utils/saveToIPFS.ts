import axios from "axios"
import { WEB3_STORAGE_KEY } from "../constants"

const saveToIPFS = async (file: string | Blob) => {
	const formData = new FormData()
	formData.append("file", file)

	var config = {
		method: "post",
		url: `https://api.web3.storage/upload`,
		headers: {
			Authorization: `Bearer ${WEB3_STORAGE_KEY}`,
			"Content-Type": "text/plain",
		},
		data: formData,
	}

	const response = await axios(config)
	// returning the CID
	return response.data.cid
}

export default saveToIPFS
