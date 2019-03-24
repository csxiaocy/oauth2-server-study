const OauthServer = require('oauth2-server')

const Request = OauthServer.Request
const Response = OauthServer.Response

const oauth = new OauthServer({
  model: require('../../model/index.js')
})

function authorization(ctx, next) {
  const request = new Request(ctx.request)
  const response = new Response(ctx.response)
  return oauth.token(request, response)
  .then(token => {
    ctx.state.data = token
  })
  .catch(err => {
    console.log(err)
    ctx.state.errMsg = err.message
  })
}

module.exports = authorization
