const express = require('express');
const router = express.Router();
const NumController = require('./../controllers/numController');
const NumInstance = new NumController();


// Crear una ruta que reciba como parámetro un número y nos muestre en pantalla el mismo número multiplicado por 2

router.get('/:num', function (req, res, next) {
    NumInstance.duplicate(req, res);
  });

module.exports = router;