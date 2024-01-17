import { createReactClient } from "@livepeer/react"
import { studioProvider } from "@livepeer/react"
import { LIVEPEER_KEY } from "../constants"

const LivePeerClient = createReactClient({
	provider: studioProvider({ apiKey: LIVEPEER_KEY as string }),
})

export default LivePeerClient
