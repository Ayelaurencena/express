class PalinController {
    checkPalindrome (req, res) {
        const word = req.params.word
        const reverse = Array.from(word).reverse().join("")
        console.log(reverse)
        if (reverse == word ) {
            res.send(`La frase "${word}" es un palíndromo ya que al revés se lee: ${reverse}.`)
        } else {
            res.send(`La frase "${word}" NO es un palíndromo ya que al revés se lee: ${reverse}.`)
        }
    
    }
}

module.exports = PalinController;