const Beer = require('../../models/beer');

const controller = {};

controller.index = (req, res) => {
  Beer
  .findAll()
  .then((data) => {
    res.render('beers/index', {beers: data})
  })
  .catch(err => console.log('ERROR', err));
};

controller.create = (req, res) => {
  // console.log(req.body.beer);
  Beer
  .create(req.body.beer)
  .then(() => res.redirect('/beers'))
  .catch((err) => console.log('ERROR', err));
};

controller.favs = (req, res) => {
  Beer
  .addBeerUser(req.body.beer.id, req.session.user.id)
  .then(() => res.redirect('/beers'))
  .catch((err) => console.log('ERROR', err));
};

module.exports = controller;
