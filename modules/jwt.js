
const jwt = require('jsonwebtoken');
const Token = {
  // 加密
  encrypt: function (data, time) { //data加密数据，time过期时间
    return jwt.sign(data, 'token', { expiresIn: time })
  },
  // 解密
  decrypt: function (token) {
    try {
      let data = jwt.verify(token, 'token');
      return {
        token: true,
        id: data.id
      };
    } catch (e) {
      return {
        token: false,
        data: e
      }
    }
  }
}
module.exports = Token;

// const token = Token.encrypt({id:user.id},'15d');  //将user.id加密，设置有效期15天，返回token

// //code……



// //解密
// let data = Token.decrypt(ctx.header.authorization);  //将请求头的token取出解密
// if (data.token) {
//     //有效token
// }else{
//     //无效token
// }
