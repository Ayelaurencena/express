
class UserController {

    getUser (req,res) {
        if (req.query.age) {
            res.send(`El nombre del usuario es ${req.params.name} y su edad es ${req.query.age} anos de edad`);
          } else {
            res.send(`El nombre del usuario es ${req.params.name}`);
          }
    }
}

module.exports = UserController;