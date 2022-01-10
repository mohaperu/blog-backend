const router = require('express').Router();
const post = require('../models/post');

//create
router.post('/', async(req,res) => {
    post.create(req.body,(err,data) => {
        res.send(data);
    })
})
module.exports = router;