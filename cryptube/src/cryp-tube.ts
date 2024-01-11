import { VideoUploaded as VideoUploadedEvent } from "../generated/CrypTube/CrypTube"
import { VideoUploaded } from "../generated/schema"

export function handleVideoUploaded(event: VideoUploadedEvent): void {
	let video = new VideoUploaded(event.params.id.toString())
	video.hash = event.params.hash
	video.title = event.params.title
	video.description = event.params.description
	video.location = event.params.location
	video.category = event.params.category
	video.thumbnailHash = event.params.thumbnailHash
	video.date = event.params.date
	video.author = event.params.author
	video.createdAt = event.block.timestamp
	video.save()
}
