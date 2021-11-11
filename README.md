# node-qrcode-image-parser

[![Build Status](https://travis-ci.org/up9cloud/node-qrcode-image-parser.svg?branch=master)](https://travis-ci.org/up9cloud/node-qrcode-image-parser)
[![Coverage Status](https://coveralls.io/repos/github/up9cloud/node-qrcode-image-parser/badge.svg?branch=master)](https://coveralls.io/github/up9cloud/node-qrcode-image-parser?branch=master)

Parse QR code image to raw data.

## Basic Usage

```js
import fs from 'fs'
import { parse } from 'qrcode-image-parser'

let data = fs.readFileSync('./login.jpg');
const parsed = parse(data)
console.log(parsed)
// [
//   [1,1,1,1,1,1,1],
//   [1,0,0,0,0,0,1],
//   [1,0,1,1,1,0,1],
//   [1,0,1,1,1,0,1],
//   [1,0,1,1,1,0,1],
//   [1,0,0,0,0,0,1],
//   [1,1,1,1,1,1,1],
// ]
```

## Advanced Usage

```js
const parsed = parse(data, {
    white: '██',
    black: '  ',
    dimantion: 1
})
console.log(parsed)
// `██████████████
// ██          ██
// ██  ██████  ██
// ██  ██████  ██
// ██  ██████  ██
// ██          ██
// ██████████████`
```

```js
const parsed = parse(data, {
    dimantion: 2
})
console.log(parsed)
// [
//   "1111111",
//   "1000001",
//   "1011101",
//   "1011101",
//   "1011101",
//   "1000001",
//   "1111111",
// ]
```

```js
const parsed = parse(data, {
    dimantion: 1
})
console.log(parsed)
// `1111111
// 1000001
// 1011101
// 1011101
// 1011101
// 1000001
// 1111111`
```

## TODO

- ~~Wechat login qrcode~~
- Wechat personal info qrcode
- ~~DataURL (base64)~~
- colored qrcode
- ~~png~~
- svg
- gif
- pdf

## License

[MIT](LICENSE)
