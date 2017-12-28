const nodemailer = require('nodemailer')
const config = require('../config/mailConfig')

module.exports = (req) => new Promise((resolve, reject) => {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport(config)
    const mailOptions = {
      from: `${req.from} <${req.fromMail}>`,
      to: req.to,
      subject: req.subject,
      text: req.text,
      html: req.html
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject('fail')
      } else {
        resolve('success')
      }
    })
  })
})


