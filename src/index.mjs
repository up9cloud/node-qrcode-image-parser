import { default as parse } from './parse.mjs'
export { default as parse } from './parse.mjs'

const defaultOptions = {
  dimension: 1,
  white: '██',
  black: '  ',
}
export function parseLineLogin(data) {
  const list = parse(data, {
      ...defaultOptions,
      // divide: 2,
  })
  // for (let i = 0; i < list.length; i++) {
  //   list[i].unshift(list[i][0]) 
  // }

  // const whiteLine = (new Array(list[0].length + 1).join(white))
  // list.unshift(whiteLine)
  // list.unshift(whiteLine)
  // list.unshift(whiteLine)

  // list.push(whiteLine)
  // list.push(whiteLine)
  // list.push(whiteLine)
  return list
}
export function parseWechatLogin(data) {
  return parse(data, {
    ...defaultOptions,
    divide: 10,
  })
}
