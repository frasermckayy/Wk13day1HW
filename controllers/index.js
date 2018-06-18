const express = require('express');
const router = new express.Router();

router.use('/film', require('./film.js'));


router.get('/', function(req, res) {
  res.json({ data: 'Welcome!'});
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"})
});

module.exports = router;
