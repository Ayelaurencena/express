const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/userController');
const UserInstance = new UserController();


router.get('/', function (req, res, next) {
  res.send("landing usuarios")
})

// - Utilizando Express crear una ruta que reciba como parametro nuestro nombre y lo muestre en pantalla. 
// - Pasarle por query nuestra edad y mostrarla también

// router.get('/:name', function (req, res, next) {

//  UserInstance.getUser(req, res);
 
// });

module.exports = router;

// Queremos crear una API con una ruta dinámica [GET] /user/:id que busque 
// la información del usuario ingresado en la API de Github y nos devuelva todo

router.get('/:id', function (req, res, next) {

  UserInstance.getUserGit(req, res);
 
});

// - Crear otra ruta /user/:id/details que busque la informacion del usuario ingresado en la API de Github
// - Limitar la información que nos devuelve a: "Nombre, empresa y bio"

router.get('/:id/details', function (req, res, next) {
  UserInstance.getDetails(req,res) ;
  

  })