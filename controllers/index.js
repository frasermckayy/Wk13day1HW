const express = require('express');
const router = new express.Router();

router.use('/films', require('./films.js'));


router.get('/', function(req, res) {
  res.json({ data: 'Welcome!'});
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"})
});

module.exports = router;
