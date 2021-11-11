import decode from 'image-decode'

export default function main(raw, {
  mineType = null,
  divide = 1,
  white = 0,
  black = 1,
  dimension = 3,
} = {}) {
  // decoded: { width: number, height: number, data: Uint8Array }
  const { data, width, height } = decode(raw, mineType)
  const div = divide
  const center = Math.floor(div / 2)
  let result = []
  let pixelIndex = -1
  let rgba = []
  data.forEach((value, index) => {
    let type = index % 4 // rgba (0,1,2,3)
    rgba[type] = value

    if (type !== 3) {
      return
    }

    pixelIndex++

    let x = pixelIndex % width
    let y = Math.floor(pixelIndex / height)

    if (x % div !== center || y % div !== center) {
      return
    }

    // rgba => white & black
    let v = white
    if (rgba[0] + rgba[1] + rgba[2] < 255 * 2) {
      v = black
    }

    const xIndex = Math.floor(x / div)
    // let yIndex = Math.ceil(y / div)
    if (result[xIndex]) {
      result[xIndex].push(v)
    } else {
      result[xIndex] = [v]
    }
  })
  switch (dimension) {
    case 1:
      return result.map(o => o.join('')).join('\n')
    case 2:
      return result.map(o => o.join(''))
    case 3:
    default:
      return result
  }
}
