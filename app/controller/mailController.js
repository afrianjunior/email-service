const mailModel = require('../models/mailModel')

/**
 * mailController() [post] method handle mailing
 */
module.exports = (req, res) => {
  /**
   * call mailModel() to handle request
   */
  mailModel(req)
    .then((response) => {
      let { 
        status,
        message
       } = response

      res.status(status).json({
        status: status,
        message: message
      })
    })
    .catch((err) => {
      let { 
        status,
        message,
        error
       } = err
       
      res.status(status).json({
        status: status,
        message: message,
        error: error
      })
    })
}