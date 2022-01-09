const router = require('express').Router();
const post = require('../models/post');

router.get("/", (req, res) => {
    post.find((error, data) => {
        // if (error) {
        //     return next(error);
        // } else {
        //     res.send(data);
        // }
        res.send(data)
    });
    
});

module.exports = router;