const authenticate = require('../middlewares/authenticate')

const router = require('koa-router')({
  prefix: '/resource'
})

router.get('/userInfo', authenticate({
  scope: 'get_user_info',
  allowBearerTokensInQueryString: true
}), async function (ctx) {
  console.log('route resource')
  ctx.state.data = {
    user: ctx.state.token.user
  }
})

module.exports = router