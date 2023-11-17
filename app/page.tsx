'use client'

import { Coordinate } from './utils/coordinates'
import { useRef, useState } from 'react'
import { Rectangle } from '@/components/custom/rectangle'
import { coordinateSetter } from './utils/coordinate-setter'
import { TimeScroll } from '@/components/custom/time-scroll'

export default function Home() {
  const videoRef = useRef(null)
  const [events, setEvents] = useState<Coordinate>([])

  coordinateSetter(videoRef, setEvents)

  return (
    <>
      <div className="relative z-[9999]">
        <video
          ref={videoRef}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
        ></video>
        <Rectangle events={events} videoRef={videoRef} />
      </div>

      <TimeScroll videoRef={videoRef} />
    </>
  )
}
