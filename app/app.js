const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();


const Ingreso = require('./routes/ingreso');
const Egreso = require('./routes/egreso');
const User = require('./routes/user');
const Login = require('./routes/login');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 
App.use('/ingreso',Ingreso);
App.use('/egreso',Egreso);
 App.use('/user', User);
 App.use('/login', Login);
 

module.exports = App;