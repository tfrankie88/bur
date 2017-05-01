const Beer = require('../../models/beer');

const controller = {};

controller.index = (req, res) => {
  Beer
  .findAll()
  .then((data) => {
    res.render('beers/index', {beers: data, users: req.session.user})
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
  console.log("in favs")
  Beer
  .checkFav()
  .then((data) => {
    console.log("inside checkfav")
    if (! data ) {
      console.log("adding to favs")
      Beer
      .addBeerUser(req.body.beer.id, req.session.user.id)
      .then(() => res.redirect('/beers'))
      .catch((err) => console.log('ERROR', err));
    }
  })
};

module.exports = controller;
