const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const router = new express.Router();

router.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({films: films[index]})
})

router.delete('/:id', function(req, res){
const index = req.params.id;
films.splice(index, 1);
res.json({films: films});
})

router.put('/:id', function(req, res){
const index = req.params.id;
films[index] = new Film(req.body);
res.json({films: films});
})

router.get('/', function(req, res){
  res.json({films: films});
})

router.post('/', function(req, res){
  const newFilm = new Film(
    req.body
  );
  films.push(newFilm);
  res.json({films: films});
});

module.exports = router;
