const errUtil = require('../../utils/errUtil')

module.exports = async (ctx, next) => {
  try {
    let account = ctx.request.body.account
    let password = ctx.request.body.password
    if (!account || !password){
      throw new Error('no account or password')
    }
    ctx.state.user_id = '2017101078'
    ctx.body = 'login success'
    await next()
  } catch(err) {
    console.log(err)
    ctx.state.code = errUtil.getErrorCode(errCode.LOGIN_MIDDLEWARE, serviseErrorCode)
  }
}