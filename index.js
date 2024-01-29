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

app.get('/about-us', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/omni-dev/index.html'));
});

app.get('/training', (req, res) => {
   res.sendFile(path.resolve(__dirname,'dist/omni-dev/index.html'));
});

app.get('/contact', (req, res) => {
   res.sendFile(path.resolve(__dirname,'dist/omni-dev/index.html'));
});

app.get('/general-fitness', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/omni-dev/index.html'))
});

app.get('/athletic-performance', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/omni-dev/index.html'))
});


// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});