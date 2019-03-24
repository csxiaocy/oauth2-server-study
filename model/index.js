
function getAccessToken(token) {
  // console.log(1)
  return {
    accessToken: '05edb9b68918cfa43179ed371aa7418888fb5512',
    accessTokenExpiresAt: new Date('2019-03-23T15:24:29.523Z'+1),
    client: { id: "stu" },
    scope: 'get_user_info',
    user: {
      "id": "9c096b842a0966ae522ce964cd81eb9f"
    }
  }
}

function getClient(clientId, clientSecret) {
  // console.log(2)
  return {
    "id": "stu",
    "redirectUris": [
      "https://www.baidu.com"
    ],
    "grants": [
      "authorization_code",
      "refresh_token"
    ],
    "scope": [
      "*"
    ],
    "banScope": []
  }
}

function getAuthorizationCode(code) {
  // console.log(3)
  return {
    code: code,
    client: { id: 'stu' },
    user: { id: '9c096b842a0966ae522ce964cd81eb9f' },
    expiresAt: new Date('2019-03-23T15:24:29.523Z'+1),
    redirectUri: 'https://www.baidu.com',
    scope: 'get_user_info',
  }
}

function getRefreshToken(refreshToken) {
  // console.log(4)
  return {
    user: {
      id: '9c096b842a0966ae522ce964cd81eb9f'
    },
    client: { id: 'stu' },
    refreshTokenExpiresAt: new Date('2019-04-06T14:24:29.523Z'+1),
    refreshToken: 'a02aad6b1586045c21aca640b8953cc44bdc8e72',
    scope: 'get_user_info'
  }
}

function saveAuthorizationCode(code, client, user) {
  // console.log(5)
  return {
    authorizationCode: '0',
    expiresAt: new Date('2019-04-06T14:24:29.523Z'+1),
    redirectUri: 'https://www.baidu.com',
    scope: 'get_user_info',
    client: 'stu',
    user: {
      "id": "9c096b842a0966ae522ce964cd81eb9f"
    }
  }
}

function validateScope(user, client, scope) {
  // console.log(6)
  return 'get_user_info'
}

function verifyScope(token, scope) {
  // console.log(7)
  return true
}

function revokeAuthorizationCode(code) {
  // console.log(8)
  return true
}

function revokeToken(token) {
  // console.log(9)
  return true
}

function saveToken(token, client, user) {
  // console.log(10)
  return {
    client: client,
    user: user,
    accessToken: "05edb9b68918cfa43179ed371aa7418888fb5512",
    accessTokenExpiresAt: new Date("2019-03-23T15:24:29.523Z"+1),
    refreshToken: "a02aad6b1586045c21aca640b8953cc44bdc8e72",
    refreshTokenExpiresAt: new Date("2019-04-06T14:24:29.523Z"+1),
    scope: "get_user_info"
  }
}

module.exports = {
  getAccessToken: getAccessToken,
  getAuthorizationCode: getAuthorizationCode,
  getClient: getClient,
  getRefreshToken: getRefreshToken,
  revokeAuthorizationCode: revokeAuthorizationCode,
  revokeToken: revokeToken,
  saveToken: saveToken,
  saveAuthorizationCode: saveAuthorizationCode,
  validateScope: validateScope,
  verifyScope: verifyScope,
}