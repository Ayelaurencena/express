const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/userController');
const UserInstance = new UserController();

// - Utilizando Express crear una ruta que reciba como parametro nuestro nombre y lo muestre en pantalla. 
// - Pasarle por query nuestra edad y mostrarla también

router.get('/:name', function (req, res, next) {

  UserInstance.getUser(req, res);
 
});

module.exports = router;

