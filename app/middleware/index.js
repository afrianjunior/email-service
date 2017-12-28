const config = require('config')

/**
 * middleware
 * 
 * filtering key authenticated
 * 
 * @param {String} key
 */

module.exports = (req, res, next) => {
  const { key } = req.headers
  const keyGenerates = config.get('xKey')

  if (key === keyGenerates) {
    return next();
  } else {
    res.status(400).json({
      code: 401,
      message: 'not authenticated',
      return: null
    })
  }
}
