class PostController {
    postSomething (req,res) {

            const { body } = req;
            console.log(body);
            res.status(200).send("request realizada con éxito");
        }

        
    }

module.exports = PostController;