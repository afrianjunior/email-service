const mailValidator = require('../validators/mailValidator')
const mailService = require('../services/mailService')
const { isArray } = require('../utils')

module.exports = (req) => new Promise((resolve, reject) => {
  const { 
    from,
    fromMail,
    to,
    subject,
    text,
    html
   } = req.body

  const item = { 
    from,
    fromMail,
    to,
    subject,
    text,
    html
  }

  mailValidator(item)
    .then((res) => {
      if (res === 'clean') {
        sendMail()
      } else {
        reject({
          status: 500,
          message: 'something error, before send email',
          error: []
        })
      }
    })
    .catch((err) => {
      if (isArray(err)) {
        reject({
          status: 422,
          message: 'invalid form',
          error: err
        })
      } else {
        reject({
          status: 500,
          message: 'something error, before send email',
          error: []
        })
      }
    })
  
  const sendMail = () => {
    mailService(item)
      .then((res) => {
        resolve({
          status: 201,
          message: 'success send email'
        })
      })
      .catch((err) => {
        reject({
          status: 500,
          message: 'error send email',
          error: []
        })
      })
  }
})