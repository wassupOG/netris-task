export function formatTimestamp(timestamp: number) {
  const seconds = Math.floor(timestamp)
  const milliseconds = Math.round((timestamp - seconds) * 1000)

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const formattedTimestamp = `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`

  return formattedTimestamp
}
