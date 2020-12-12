const express = require('express');
const router = express.Router();
const PostController = require('./../controllers/postController');
const InstancePost = new PostController;



/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('testtttttttt');
});

router.post('/userposting', function (req, res, next) {
  InstancePost.postSomething(req,res)

})

module.exports = router;
