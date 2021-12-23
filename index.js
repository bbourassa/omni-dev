let express = require('express'),
  path = require('path'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer')

//const tripRoute = require('./node-rest-api/routes/trip.routes');

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//const sendMail = (user, callback) => {
//    console.log(user);
//    const transporter = nodemailer.createTransport({
//      host: "smtp.gmail.com",
//      port: 587,
//      secure: false,
//      auth: {
//        user: "bnboura3@gmail.com",
//        pass: "thisistemp"
//      }
//    });

//    const mailOptions = {
//        from: user.email,
//        to: 'bnboura3@gmail.com',
//        subject: "Gym Inquiry",
//        html: `<h2>You Have a New Inquiry from ${user.name}:</h1><br>
//        <h3>Contact Email: ${user.email}</h3>
//        <p>${user.message}</p>`
//      };
    
//    const mailReceipt = {
//        from: user.email,
//        to: user.email,
//        subject: "Thank You For Your Inquiry!",
//        html: `<p>Thank you for your inquiry to Omnigym. We will get back to you as soon as possible.</p>` 
//    }
      
//      transporter.sendMail(mailOptions, callback);
//      transporter.sendMail(mailReceipt, callback);
//  }

app.use(cors());

app.use(allowCrossDomain);

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/omni-dev')));


// API root
//app.use('/api', tripRoute);

app.listen(process.env.PORT || 8000, () => {
//  console.log('Listening on port ' + port)
})

// Base Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/omni-dev'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/omni-dev'));
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
//app.post("/sendmail", (req, res) => {
//    console.log("request came");
//    let user = req.body;
//    sendMail(user, (err, info) => {
//      if (err) {
//        console.log(err);
//        res.status(400);
//        res.send({ error: "Failed to send email" });
//      } else {
//        console.log("Email has been sent");
//        res.send(info);
//      }
//    });
//  });

app.get('/about-us', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/omni-dev/index.html'));
});

//app.get('/trip-create', (req, res) => {
//    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
//});

//app.get('/trip-compare', (req, res) => {
//    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
//});

//app.get('/view-trip', (req, res) => {
//    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
//});

//app.get('/view-compare', (req, res) => {
//    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
//});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});