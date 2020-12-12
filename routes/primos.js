const express = require('express');
const router = express.Router();
const PrimosController = require('./../controllers/primeController');
const PrimosInstance = new PrimosController();


router.get('/', function (req, res, next) {
    PrimosInstance.isPrime(req, res)
} )


module.exports = router;