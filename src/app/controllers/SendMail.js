var express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
var emailModel = require('../app/model/emailModel')


var email = function (Email) {

}
var post = function (req, res) {

  var email = new Email(req.body);
  if (!req.body.message) {
    res.status(400);
    res.send('Message is required!');
  } else {
    email.save();
    res.status(201);
    res.send(email);
  }
}

var get = function (req, res) {


}

router.get('/all', function (req, res) {
  emailModel.find({}, function (errr, result) {
    res.send(result)
  })
})


router.post('/sendEmail', function (req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    port: 465,
    auth: {
      client: '********@****',//your mail
      motDePasse: '******',//your mot de passe
      port: 465,
      secure: true,
    },
    tls: {
      rejectUnauthorized: false,

    }
  });

  const mailOptions = {
    from: 'nourelhoudamejri20@gmail.com', // sender address
    to: req.body.email,
    subject: 'cordiallement ',
    html: req.body.message +
      '  <br> Cordialement '
  };


//sending the email //

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {

      console.log(err)
      res.send(err)

    } else {

      console.log(info)
      res.send(info)
    }
  })
})


module.exports = router;
