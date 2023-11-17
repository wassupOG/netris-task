import { MutableRefObject } from 'react'

export function handleVideoRewind(
  videoRef: MutableRefObject<null | HTMLVideoElement>,
  timestamp: number,
) {
  if (videoRef.current) {
    videoRef.current.currentTime = timestamp
  }
}
