const express = require('express');
const router = express.Router();

// Add Post Route
router.get('/', function(req, res) {
    res.render('placeholder');
});

module.exports = router;