var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET Contact Us page. */
router.get('/', function(req, res, next) {
   res.render('ContactUs');
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'coen3464t19@gmail.com',
            pass: 'pass1234567890',
        }
    });

    var mailOptions = {
        from: 'JillyBeans <coen3463@gmail.com>',
        to: 'coen3463@gmail.com',
        subject: 'inquiries',
        text: 'you have a new message... Name: '+req.body.name+ ' Email: '+req.body.email+ ' Message: '+req.body.message,
        html: '<p>You got a new message with the following details..</p><ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+ '</li><li>Message: '+req.body.message+ '</li></ul>'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message Sent:'+info.response);
            res.redirect('/ContactUs');
        }

    });
});
module.exports = router;
