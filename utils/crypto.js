const crypto = require('crypto')

/**
 * 加密函数
 * @param type  加密类型，默认为 aes-256-cbc
 * @param data  要加密的数据
 * @param key   aes-256-cbc时为 32位
 * @param iv    aes-256-cbc时为 16位
 * @returns {string}
 */
function aesEncrypt({ type = 'aes-256-cbc', data, key, iv }) {
    const cipher = crypto.createCipheriv(type, key, iv)
    let crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

/**
 * 解密函数
 * @param type  解密类型，默认为 aes-256-cbc
 * @param data  要解密的数据
 * @param key   aes-256-cbc时为 32位
 * @param iv    aes-256-cbc时为 16位
 * @returns {string}
 */
function aesDecrypt({ type = 'aes-256-cbc', data, key, iv }) {
    const decipher = crypto.createDecipheriv(type, key, iv)
    let decrypted = decipher.update(data, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

/**
 * 带有 key 的md5加密，单向加密
 * @param data 要加密的数据
 * @param key  秘钥
 * @returns {string}
 */
function md5withKey(data, key) {
    const hash = crypto.createHash('md5')
    hash.update(data)
    hash.update(key)
    return hash.digest('hex')
}

module.exports = {
    aesEncrypt,
    aesDecrypt,
    md5withKey
}