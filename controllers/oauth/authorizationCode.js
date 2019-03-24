const OauthServer = require('oauth2-server')

const Request = OauthServer.Request
const Response = OauthServer.Response

const oauth = new OauthServer({
  model: require('../../model/index.js')
})

async function authorizationCodeMiddleware(ctx, next) {
  const request = new Request(ctx.request)
  const response = new Response(ctx.response)
  const user_id = '9c096b842a0966ae522ce964cd81eb9f'
  const options = {
    authenticateHandler: {
      handle: () => ({id: user_id})
    }
  }
  request.query.scope = 'get_user_info'
  await oauth.authorize(request, response, options)
  .then(code => {
    console.log(code);
    ctx.body = {
      code: 0,
      errMsg: '',
      data: {
        user_id: user_id
      }
    }
  })
}

module.exports = authorizationCodeMiddleware