'use client'

import { Coordinate } from './utils/coordinates'
import { useRef, useState } from 'react'
import { Rectangle } from '@/components/custom/rectangle'
import { useCoordinateSetter } from './utils/coordinate-setter'
import { TimeScroll } from '@/components/custom/time-scroll'

export default function Home() {
  const videoRef = useRef<null | HTMLVideoElement>(null)
  const [events, setEvents] = useState<Coordinate>([])

  useCoordinateSetter(videoRef, setEvents)

  return (
    <>
      <div className="relative">
        <video
          className="border"
          ref={videoRef}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
        />
        <Rectangle events={events} videoRef={videoRef} />
      </div>

      <TimeScroll videoRef={videoRef} />
    </>
  )
}
