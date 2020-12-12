
const axios = require("axios");

class UserController {


    getUser (req,res) {
        if (req.query.age) {
            res.send(`El nombre del usuario es ${req.params.name} y su edad es ${req.query.age} anos de edad`);
          } else {
            res.send(`El nombre del usuario es ${req.params.name}`);
          }
    }

    async getUserGit (req, res) {
      const { id } = req.params;
      const data = await axios.get(`https://api.github.com/users/${id}`);
      res.json(data.data)
      }

    async getDetails (req, res) {
      const { id } = req.params;
      const {helado, edad} = req.query;
      const data = await axios.get(`https://api.github.com/users/${id}`);
      const newData = {...data.data, "helado":`${helado}`, "edad":`${edad}`}
      const modeledData = {
        nombre: newData.name,
        empresa: newData.company,
        bio: newData.bio,
        helado: newData.helado,
        edad: newData.edad

        };
        res.json(modeledData)
    }

}



module.exports = UserController;