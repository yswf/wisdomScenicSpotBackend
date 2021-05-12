const Token = require('./jwt')
const verificationToken = (res, authorization) => {
  let data = Token.decrypt(authorization);  //将请求头的token取出解密
  if (data.token) {
    return true
  } else {
    res.json({
      code: '400',
      msg: 'token无效！'
    });
    return false
  }
}
module.exports = verificationToken
