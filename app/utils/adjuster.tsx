// ! "D" stands for "Dimension(s)"

const nativeD = {
  width: 1280,
  height: 720,
}

type dType = 'h' | 'w'

export function adjuster(native: number, currentD: number, dType: dType) {
  const adjusted = native * (currentD / (dType === 'h' ? nativeD.height : nativeD.width))
  return `${adjusted}px`
}
