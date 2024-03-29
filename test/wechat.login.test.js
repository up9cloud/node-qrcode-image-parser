import fs from 'fs'
import { expect } from 'chai'
import { parse, parseWechatLogin } from '../src/index.mjs'

describe('jpg test', function () {
  let data = fs.readFileSync(new URL('./wechat.login.jpg', import.meta.url))
  it('should be the data.', function () {
    const parsed = parse(data, {
      divide: 10
    })
    expect(parsed).to.deep.equal([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
  })
  it('should be 2 dimantional data.', function () {
    const parsed = parse(data, {
      divide: 10,
      dimension: 2
    })
    expect(parsed).to.deep.equal([
      '0000000000000000000000000000000000000000000',
      '0000000000000000000000000000000000000000000',
      '0000000000000000000000000000000000000000000',
      '0001111111000001001000101101111101111111000',
      '0001000001000110000011001011010001000001000',
      '0001011101000101010011000111111101011101000',
      '0001011101011111011110110010100001011101000',
      '0001011101010000110101000110011001011101000',
      '0001000001001101010100010011001101000001000',
      '0001111111010101010101010101010101111111000',
      '0000000000011011110100011011010100000000000',
      '0000011001001101101111110000100111011000000',
      '0001110100111111000011111110101110110101000',
      '0001011011010110011110011000100110011010000',
      '0001000010110111110001001010100111000110000',
      '0001110001100100101000110011001011010111000',
      '0001111110100010100100100111010000110010000',
      '0001011001111100010111011110000101110011000',
      '0000011010100101000011111110000001110000000',
      '0000010101111111100000011010101000110101000',
      '0000001010000111101001100000000101101101000',
      '0000010101000000101111100001010010000010000',
      '0001000110110011100000010100110100001011000',
      '0001101001101001111110001101110100011011000',
      '0001101100011110010101010111101010100000000',
      '0000001001011100101100110100111100000110000',
      '0000000110010011001010010010000101010000000',
      '0001000001111101000011111110101010110100000',
      '0000111100101100010110111001010110100001000',
      '0001001111000010100000011011111000101110000',
      '0000011000101101111011001110011100011000000',
      '0000011001101111100100011010110111111101000',
      '0000000000001110111010110100101100010000000',
      '0001111111000111010100010101110101011011000',
      '0001000001001101000111001011000100010100000',
      '0001011101001100111000011101101111110110000',
      '0001011101011010011000110001111011101101000',
      '0001011101011011111101001010011011000110000',
      '0001000001001001011010000011110010110110000',
      '0001111111000111010101001101010001000111000',
      '0000000000000000000000000000000000000000000',
      '0000000000000000000000000000000000000000000',
      '0000000000000000000000000000000000000000000'
    ])
  })
  it('should be 1 dimantional data.', function () {
    const parsed = parse(data, {
      divide: 10,
      dimension: 1
    })
    expect(parsed).to.deep.equal(`0000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000
0001111111000001001000101101111101111111000
0001000001000110000011001011010001000001000
0001011101000101010011000111111101011101000
0001011101011111011110110010100001011101000
0001011101010000110101000110011001011101000
0001000001001101010100010011001101000001000
0001111111010101010101010101010101111111000
0000000000011011110100011011010100000000000
0000011001001101101111110000100111011000000
0001110100111111000011111110101110110101000
0001011011010110011110011000100110011010000
0001000010110111110001001010100111000110000
0001110001100100101000110011001011010111000
0001111110100010100100100111010000110010000
0001011001111100010111011110000101110011000
0000011010100101000011111110000001110000000
0000010101111111100000011010101000110101000
0000001010000111101001100000000101101101000
0000010101000000101111100001010010000010000
0001000110110011100000010100110100001011000
0001101001101001111110001101110100011011000
0001101100011110010101010111101010100000000
0000001001011100101100110100111100000110000
0000000110010011001010010010000101010000000
0001000001111101000011111110101010110100000
0000111100101100010110111001010110100001000
0001001111000010100000011011111000101110000
0000011000101101111011001110011100011000000
0000011001101111100100011010110111111101000
0000000000001110111010110100101100010000000
0001111111000111010100010101110101011011000
0001000001001101000111001011000100010100000
0001011101001100111000011101101111110110000
0001011101011010011000110001111011101101000
0001011101011011111101001010011011000110000
0001000001001001011010000011110010110110000
0001111111000111010101001101010001000111000
0000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000`)
  })
  it('should be 1 dimantional data.', function () {
    const parsed = parseWechatLogin(data)
    expect(parsed).to.deep.equal(`██████████████████████████████████████████████████████████████████████████████████████
██████████████████████████████████████████████████████████████████████████████████████
██████████████████████████████████████████████████████████████████████████████████████
██████              ██████████  ████  ██████  ██    ██          ██              ██████
██████  ██████████  ██████    ██████████    ████  ██    ██  ██████  ██████████  ██████
██████  ██      ██  ██████  ██  ██  ████    ██████              ██  ██      ██  ██████
██████  ██      ██  ██          ██        ██    ████  ██  ████████  ██      ██  ██████
██████  ██      ██  ██  ████████    ██  ██  ██████    ████    ████  ██      ██  ██████
██████  ██████████  ████    ██  ██  ██  ██████  ████    ████    ██  ██████████  ██████
██████              ██  ██  ██  ██  ██  ██  ██  ██  ██  ██  ██  ██              ██████
██████████████████████    ██        ██  ██████    ██    ██  ██  ██████████████████████
██████████    ████  ████    ██    ██            ████████  ████      ██    ████████████
██████      ██  ████            ████████              ██  ██      ██    ██  ██  ██████
██████  ██    ██    ██  ██    ████        ████    ██████  ████    ████    ██  ████████
██████  ████████  ██    ██          ██████  ████  ██  ██  ████      ██████    ████████
██████      ██████    ████  ████  ██  ██████    ████    ████  ██    ██  ██      ██████
██████            ██  ██████  ██  ████  ████  ████      ██  ████████    ████  ████████
██████  ██    ████          ██████  ██      ██        ████████  ██      ████    ██████
██████████    ██  ██  ████  ██  ████████              ████████████      ██████████████
██████████  ██  ██                ████████████    ██  ██  ██  ██████    ██  ██  ██████
████████████  ██  ████████        ██  ████    ████████████████  ██    ██    ██  ██████
██████████  ██  ██  ████████████  ██          ████████  ██  ████  ██████████  ████████
██████  ██████    ██    ████      ████████████  ██  ████    ██  ████████  ██    ██████
██████    ██  ████    ██  ████            ██████    ██      ██  ██████    ██    ██████
██████    ██    ██████        ████  ██  ██  ██  ██        ██  ██  ██  ████████████████
████████████  ████  ██      ████  ██    ████    ██  ████        ██████████    ████████
██████████████    ████  ████    ████  ██  ████  ████  ████████  ██  ██  ██████████████
██████  ██████████          ██  ████████              ██  ██  ██  ██    ██  ██████████
████████        ████  ██    ██████  ██    ██      ████  ██  ██    ██  ████████  ██████
██████  ████        ████████  ██  ████████████    ██          ██████  ██      ████████
██████████    ██████  ██    ██        ██    ████      ████      ██████    ████████████
██████████    ████    ██          ████  ██████    ██  ██    ██              ██  ██████
████████████████████████      ██      ██  ██    ██  ████  ██    ██████  ██████████████
██████              ██████      ██  ██  ██████  ██  ██      ██  ██  ██    ██    ██████
██████  ██████████  ████    ██  ██████      ████  ██    ██████  ██████  ██  ██████████
██████  ██      ██  ████    ████      ████████      ██    ██            ██    ████████
██████  ██      ██  ██    ██  ████    ██████    ██████        ██      ██    ██  ██████
██████  ██      ██  ██    ██            ██  ████  ██  ████    ██    ██████    ████████
██████  ██████████  ████  ████  ██    ██  ██████████        ████  ██    ██    ████████
██████              ██████      ██  ██  ██  ████    ██  ██  ██████  ██████      ██████
██████████████████████████████████████████████████████████████████████████████████████
██████████████████████████████████████████████████████████████████████████████████████
██████████████████████████████████████████████████████████████████████████████████████`)
  })
})
