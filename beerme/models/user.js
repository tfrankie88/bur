const bcrypt = require('bcrypt');
const db = require('../config/db');

const User = {};

User.create = (user) => {
  // console.log("user comes back as: ", user);
  const password = bcrypt.hashSync(user.password, 10);
  return db.none(`
    INSERT INTO users
    (first_name, last_name, username, email, password_digest)
    VALUES
    ($1, $2, $3, $4, $5)`,
    [
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      password
    ]
  );
};

User.findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1`,
    [email]
  );
};

module.exports = User;
