import { useCallback, useEffect, useRef } from 'react'

const VideoRecorder = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const mediaRecorder = useRef<MediaRecorder | null>(null)
	const videoChunks = useRef<Blob[]>([])

	const getMediaPermission = useCallback(async () => {
		try {
			const audioConstraints = { audio: true }
			const videoConstraints = {
				audio: false,
				video: true
			}

			const audioStream = await navigator.mediaDevices.getUserMedia(audioConstraints)
			const videoStream = await navigator.mediaDevices.getUserMedia(videoConstraints)

			if (videoRef.current) {
				videoRef.current.srcObject = videoStream
			}

			// MediaRecorder 추가
			const combinedStream = new MediaStream([
				...videoStream.getVideoTracks(),
				...audioStream.getAudioTracks()
			])

			const recorder = new MediaRecorder(combinedStream, {
				mimeType: 'video/webm'
			})

			recorder.ondataavailable = (e) => {
				if (typeof e.data === 'undefined') return
				if (e.data.size === 0) return
				videoChunks.current.push(e.data)
			}

			mediaRecorder.current = recorder
		} catch (err) {
			console.log(err)
		}
	}, [])

	useEffect(() => {
		getMediaPermission()
	}, [])

	return (
		<div>
			<video ref={videoRef} className={''} autoPlay />
			<button onClick={() => mediaRecorder.current?.start()}>Start Recording</button>
			<button onClick={() => mediaRecorder.current?.stop()}>Stop Recording</button>
		</div>
	)
}

export default VideoRecorder
