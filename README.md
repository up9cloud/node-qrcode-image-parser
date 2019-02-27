# node-qrcode-image-parser

[![Build Status](https://travis-ci.org/up9cloud/node-qrcode-image-parser.svg?branch=master)](https://travis-ci.org/up9cloud/node-qrcode-image-parser)
[![Coverage Status](https://coveralls.io/repos/github/up9cloud/node-qrcode-image-parser/badge.svg?branch=master)](https://coveralls.io/github/up9cloud/node-qrcode-image-parser?branch=master)

Parse QR code image to raw data.

## Basic Usage

```js
const fs = require('fs');
const Parser = require('qrcode-image-parser');

let data = fs.readFileSync('./login.jpg');
Parser.parse(data, (err, parsed) => {
    console.log(parsed);
    // [
    //   [1,1,1,1,1,1,1],
    //   [1,0,0,0,0,0,1],
    //   [1,0,1,1,1,0,1],
    //   [1,0,1,1,1,0,1],
    //   [1,0,1,1,1,0,1],
    //   [1,0,0,0,0,0,1],
    //   [1,1,1,1,1,1,1],
    // ]
});

```

## Advanced Usage

```js
Parser.parse(data, {
    white: '██',
    black: '  ',
    resultDimantion: 1
}, (err, parsed) => {
    console.log(parsed);
    // `██████████████
    // ██          ██
    // ██  ██████  ██
    // ██  ██████  ██
    // ██  ██████  ██
    // ██          ██
    // ██████████████`
});

Parser.parse(data, {
    resultDimantion: 2
}, (err, parsed) => {
    console.log(parsed);
    // [
    //   "1111111",
    //   "1000001",
    //   "1011101",
    //   "1011101",
    //   "1011101",
    //   "1000001",
    //   "1111111",
    // ]
});

Parser.parse(data, {
    resultDimantion: 1
}, (err, parsed) => {
    console.log(parsed);
    // `1111111
    // 1000001
    // 1011101
    // 1011101
    // 1011101
    // 1000001
    // 1111111`
});
```

## wechat login

```js
const fs = require('fs');

const { Wechaty } = require('wechaty');
const request = require('request');
const Parser = require('qrcode-image-parser');

Wechaty.instance() // Singleton
    .on('scan', (url, code) => {
        console.log(`Scan event code is: ${code}`)
        if (code < 400) {
            return;
        }
        console.log(`Waiting for scan QR Code: ${url}`);
        let filepath = 'login.jpg';
        request(url, (err, res, body) => {
            if (err) {
                throw err;
            }
            Parser.parse(fs.readFileSync(filepath), {
                divide: 10,
                resultDimension: 1,
                white: '██',
                black: '  ',
            }, (err, parsed) => {
                if (err) {
                    throw err;
                }
                console.log(parsed);
            });
        })
        .pipe(fs.createWriteStream(filepath));
    })
    .init()
```

## TODO

- ~~wechat login qrcode~~
- wechat personal info qrcode
- DataURL (base64)
- colored qrcode
- png
- svg
- gif
- pdf

## License

[MIT](LICENSE)
