import fs from 'fs'
import { expect } from 'chai'
import { parseLineLogin } from '../src/index.mjs'

describe('dataUrl test', function () {
  const dataUrl = fs.readFileSync(new URL('./line.login.base64', import.meta.url), 'utf8')
  it('should be 1 dimantional data.', function () {
    const parsed = parseLineLogin(dataUrl)
    expect(parsed).to.deep.equal(fs.readFileSync(new URL('./line.login.expect', import.meta.url), 'utf8'))
  })
})
