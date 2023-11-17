import { adjuster } from '@/app/utils/adjuster'
import { Coordinate } from '@/app/utils/coordinates'
import { MutableRefObject } from 'react'

type ReactangleProps = {
  events: Coordinate
  videoRef: MutableRefObject<null | HTMLVideoElement>
}

export function Rectangle({ events, videoRef }: ReactangleProps) {
  return events.map((event) => (
    <div
      key={event.timestamp}
      style={{
        position: 'absolute',
        left: adjuster(event.zone.left, videoRef!.current!.clientWidth, 'w'),
        top: adjuster(event.zone.top, videoRef!.current!.clientHeight, 'h'),
        width: adjuster(event.zone.width, videoRef!.current!.clientWidth, 'w'),
        height: adjuster(event.zone.height, videoRef!.current!.clientHeight, 'h'),
        background: 'rgba(0, 255, 0, 0.4)',
        border: '1px solid green',
      }}
    />
  ))
}
