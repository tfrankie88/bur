const bcrypt  = require('bcrypt');
const User = require('../../models/user');
const Beer = require('../../models/beer');

const controller = {};

controller.new = (req, res) => {
  res.render('users/new');
}

controller.login = (req, res) => {
  const error = {};
  if (req.query.error) error.message = 'Incorrect login';
  res.render('users/login_page', {message: error.message});
};

controller.process_login = (req, res) => {
  User
  .findByEmail(req.body.user.email)
  .then((user) => {
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);

      if (isAuthed) {
        req.session.isAuthenticated = true;
        delete user.password_digest;
        req.session.user = user
        res.redirect(`/users/${user.id}/beers`);
      } else {
        res.redirect(`/users/login_page?error=true`);
      }
    } else {
      res.redirect(`/users/login_page?error=true`);
    }
  })
  .catch(err => console.log('ERROR:', err));
};

controller.create = (req, res) => {
  // console.log("req.body comes back as: ", req.body)
  User
  .create(req.body.user)
  .then(() => res.redirect('users/login_page'))
  .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res, next) => {
  console.log('inside controller show params', req.params)
  Beer
  .favoriteBeers(req.params.id)
  .then((data) => {
    console.log('inside controller.show data',data)
    res.render('users/show', {
      beers: data
    })
  })
  .catch(err => console.log(err));
}

module.exports = controller;
