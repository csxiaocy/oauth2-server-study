// const config = require('../config/errCode')

function getErrorCode(modelErrorCode = '00', serviceErrorCode = '00') {
    return modelErrorCode + serviceErrorCode
}

module.exports = {
    getErrorCode
}