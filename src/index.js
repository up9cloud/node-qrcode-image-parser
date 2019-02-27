const wechatLogin = require('./wechat/login.js')

module.exports = {
  parse: (data, optionsOrCb, cb) => {
    let options = {}
    if (optionsOrCb) {
      if (typeof optionsOrCb === 'function') {
        cb = optionsOrCb
      } else {
        options = optionsOrCb
        if (!cb) {
          cb = () => {}
        }
      }
    }
    return wechatLogin(data, options, cb)
  }
}
