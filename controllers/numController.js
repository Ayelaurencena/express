class NumController {

    duplicate (req,res) {
        const numString = req.params.num * 2
        res.json(numString);
    }
}

module.exports = NumController;