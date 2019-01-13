let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

//create express app
let app = express();

app.use(cookieParser);
app.use(bodyParser.json);

//use routes
app.use('/', require('./src/routes/index'));
app.use('/users',  require('./src/routes/users'));

//use middleware
app.use(require('./src/middleware/error-handler'));
app.use(require('./src/middleware/not-found-handler'));

module.exports = app;
