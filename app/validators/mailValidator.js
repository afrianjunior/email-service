const { isArray, isEmpty, isEmail } = require('../utils')

module.exports = (req) => new Promise ((resolve, reject) => {

  let error = []
      
  if (isEmpty(req.from)) {
    error.push('from field is required')
  }
  
  if (isEmpty(req.fromMail)) {
    error.push('fromEmail field is required')
  }
  
  if (!isEmail(req.fromMail)) {
    error.push('fromEmail field must be valid email')
  }
  
  if (!isArray(req.to)) {
    error.push('to field must be valid array')
  } else {
    req.to.forEach((el, index) => {
      if (!isEmail(el)) {
        error.push(`to[${index}] field must be valid email`)
      }
    })
  }

  if (isEmpty(req.subject)) {
    error.push('subject field is required')
  }

  if (isEmpty(req.text)) {
    error.push('text field is required')
  }

  if (isEmpty(req.html)) {
    error.push('html field is required')
  }
    
  if (error.length == 0) {
    resolve('clean')
  } else {
    reject(error)
  }
  
})