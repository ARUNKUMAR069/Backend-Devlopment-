const express = require('express');
const router = express.Router();
// routing for home
router.get('/home', (req, res) => {

res.render('home')



})
module.exports = router;
