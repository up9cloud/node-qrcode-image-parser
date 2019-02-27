const inkjet = require('inkjet')

module.exports = (data, options, cb) => {
  inkjet.decode(data, function (err, decoded) {
    if (err) {
      return cb(err)
    }
    // decoded: { width: number, height: number, data: Uint8Array }
    let width = decoded.width
    // let height = decoded.height
    let data = decoded.data

    let div = options.divide || 1
    let center = Math.floor(div / 2)

    let rgba = []
    let count = -1
    let white = options.hasOwnProperty('white') ? options.white : 0
    let black = options.hasOwnProperty('black') ? options.black : 1

    let result = []
    let resultPusher
    switch (options.resultDimension) {
      case 1:
      case 2:
        resultPusher = (i, v) => {
          if (result[i]) {
            result[i] += v
          } else {
            result[i] = '' + v
          }
        }
        break
      case 3:
      default:
        resultPusher = (i, v) => {
          if (result[i]) {
            result[i].push(v)
          } else {
            result[i] = [v]
          }
        }
    }
    data.forEach((value, index) => {
      let type = index % 4 // rgba (0,1,2,3)
      rgba[type] = value

      if (type !== 3) {
        return
      }

      count++

      let x = count % width
      let y = Math.floor(count / width)

      if (x % div !== center || y % div !== center) {
        return
      }

      // rgba => color
      let v = white
      if (rgba[0] + rgba[1] + rgba[2] < 255 * 2) {
        v = black
      }

      let i = Math.floor(x / div)
      // let j = Math.ceil(y/div);
      resultPusher(i, v)

      if (options.debug) {
        console.log({
          raw: {
            index: index,
            value: value
          },
          parsed: {
            x: i,
            y: result[i].length - 1,
            value: v
          }
        })
      }
    })
    count += 1
    if (options.debug) {
      console.log(`total pixel points: ${count}`)
    }

    if (options.resultDimension === 1) {
      return cb(null, result.join('\n'))
    }
    return cb(null, result)
  })
}
