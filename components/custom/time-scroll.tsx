import { coordinates } from '@/app/utils/coordinates'
import { formatTimestamp } from '@/app/utils/format-timestamp'
import { handleVideoRewind } from '@/app/utils/handle-rewind'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MutableRefObject } from 'react'

type TimeScrollProps = {
  videoRef: MutableRefObject<HTMLVideoElement | null>
}

export function TimeScroll({ videoRef }: TimeScrollProps) {
  return (
    <div className="mt-5 flex justify-center">
      <ScrollArea className="h-72 w-fit rounded-md border">
        <div className="flex flex-col gap-1 p-2">
          {coordinates.map((item, index) => (
            <Badge
              className="hover: cursor-pointer"
              onClick={() => handleVideoRewind(videoRef, item.timestamp)}
              key={index}
            >
              {formatTimestamp(item.timestamp)}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
