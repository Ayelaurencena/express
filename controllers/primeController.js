class PrimosController {


//   - Cuantos números primos existen entre 1 y 150
//   - Un listado de esos números


    isPrime (req, res) {
        const array = []
        const primeArray = []
        for (let i = 1; i < 151; i++) {
            array.push([i])
            }
    // Ya esta el array con los 150 numero, resta calcular cuales son primos y pushearlos a un array
            res.send("Falta calcular los primos")
    }
}
        
      


module.exports = PrimosController;