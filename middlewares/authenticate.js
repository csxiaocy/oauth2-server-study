const OauthServer = require('oauth2-server');

const Request = OauthServer.Request;
const Response = OauthServer.Response;

const oauth = new OauthServer({
  model: require('../model/index.js')
});

// 登录接口
module.exports = function (opt) {
  let options = opt || {}
  return async (ctx, next) => {
    try {
      const request = new Request({
        headers: ctx.request.headers,
        method: ctx.request.method,
        query: ctx.request.query,
        body: ctx.request.body
      })
      const response = new Response(ctx.res)
      ctx.state.token = await oauth.authenticate(request, response, options)
      await next()
    } catch (err) {
      ctx.state.code = 0
      ctx.state.errMsg = err.message
    }
  }
}