const router = require('koa-router')({
  prefix: '/oauth'
});
const controller = require('../controllers');

// 用户登录
router.post('/login', controller.oauth.login);

// 用户授权
router.get('/authorise', controller.oauth.authorizationCode);

// 换取凭证
router.post('/token', controller.oauth.authorization)

module.exports = router