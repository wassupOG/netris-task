import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'
import { Coordinate, coordinates } from './coordinates'

export function coordinateSetter(
  videoRef: MutableRefObject<HTMLVideoElement | null>,
  setEvents: Dispatch<SetStateAction<Coordinate>>,
) {
  useEffect(() => {
    const video = videoRef.current

    const handleTimeUpdate = () => {
      const currentTime = video!.currentTime

      const activeEvents = coordinates.filter(
        (event) =>
          currentTime >= event.timestamp &&
          currentTime <= event.timestamp + event.duration,
      )

      setEvents(activeEvents)
    }

    video!.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video!.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])
}
