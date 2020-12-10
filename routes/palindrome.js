const express = require('express');
const router = express.Router();
const PalinController = require('./../controllers/palinController');
const PalinInstance = new PalinController();

// crear una ruta que reciba como parámetro una palabra, y nos devuelva en pantalla si la misma es 
// o no un palíndromo en el siguiente formato:

router.get('/:word', function (req, res, next) {
  PalinInstance.checkPalindrome (req, res);

  });
module.exports = router;
