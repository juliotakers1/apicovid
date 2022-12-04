const express = require('express');

const EgresoCtrl = require('../controllers/EgresoController');

const Router = express.Router();

Router.get('/',EgresoCtrl.index) //api.com/Egreso/
        .post('/',EgresoCtrl.create)
        .get('/:key/:value',EgresoCtrl.find, EgresoCtrl.show) 
        .put('/:key/:value',EgresoCtrl.find,EgresoCtrl.update)
        .delete('/:key/:value',EgresoCtrl.find,EgresoCtrl.remove);

module.exports = Router; 