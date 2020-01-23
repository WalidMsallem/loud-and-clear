const express = require('express');
const path = require('path');
var nodemailer = require('nodemailer');
const bodyParser = require ('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    service :'smtp',
    // service :'gmail',
    // auth: {
    //   user: 'koussaytest@gmail.com',
    //   pass: "Testing!123"
    // }
    auth: {
      user: "gomycode.project@gmail.com",
      pass: "0123azeRTY"
    }
  });

  var test = {
    name: 'walid',
    email : 'walidmsallem@gmail.com'
  }

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

// An api endpoint that returns a short list of items
app.post('/api/contact', (req, res) => {
    const {name , email , message} = req.body
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    
    var mailOptions = {
    from: 'gomycode.project@gmail.com',
    to: test.email,
    subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
    html: `<div>
    <h1>Hello</h1>
    <p>
    ${message}
    </p>
    </div>`,
  };
    transporter.sendMail(mailOptions, function(error, info){
        // res.status(400).json({ collaborater: "There are no collaboraters" })
      if (error) {
        console.log(error);
        res.status(400).json({ message: "There is an error" })
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: "succes" })
      }
    });
  
  })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log('App is listening on port ' + port);