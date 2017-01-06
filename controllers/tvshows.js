var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');

//GET - retornar todos los shows en la base de datos
exports.findAllTVShows = function(req, res) {
    TVShow.find(function(err, tvshows) {
        if (err) res.send(500, err.message);

        console.log('GET /tvshows');
            res.status(200).jsonp(tvshows);
    });
};

//GET - retornar un show con ID específico
exports.findById = function(req, res) {
    TVShow.findById(req.params.id, function(err, tvshow){
        if (err) return res.send(500, err.message);

        console.log('GET /tvshow/' + req.params.id);
            res.status(200).jsonp(tvshow);
    });
};

//POST - Insertar un nuevo show a la db
exports.addTVShow = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var tvshow = new TVShow({
        title: req.body.title,
        year:  req.body.year,
        country:  req.body.country,
        poster:   req.body.poster,
        seasons:  req.body.seasons,
        genre:    req.body.genre,
        summary:  req.body.summary
    });

    tvshow.save(function(err, tvshow) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(tvshow);
    });
};