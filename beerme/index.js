const express      = require('express');
const logger       = require('morgan');
const session      = require('express-session');
const bodyParser   = require('body-parser');
const path         = require('path')

const app          = express();
const PORT         = 3000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(session({
  secret: 'Mariachi Chicken',
  resave: false,
  saveUninitialized: true
}));

app.use(require('./resources'));

app.listen(PORT, () => console.log('Server is listening', PORT));
