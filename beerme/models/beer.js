const db = require('../config/db');

const Beer = {};

Beer.findAll = () => {
  return db.manyOrNone(`
    SELECT *
    FROM beers`
  );
};

Beer.create = (beer) => {
  return db.none(`
    INSERT INTO beers
    (beer, state_brewed, feels)
    VALUES
    ($1, $2, $3)`,
    [beer.beer, beer.state_brewed, beer.feels]
  );
};

Beer.addBeerUser = (beerId, userId) => {
  return db.none(`
    INSERT INTO favorite_beers
    (beer_id, user_id)
    VALUES
    ($1, $2)`,
    [beerId, userId]
  );
}

Beer.checkFav = (userId, beerId) => {
  return db.oneOrNone(
    `SELECT * FROM
      favorite_beers WHERE userId = user_id
      AND beerId = beerId`
  )
}

Beer.favoriteBeers = (userId) => {
  console.log(userId)
	return db.manyOrNone(
		`SELECT
			beers.id AS beer_id,
			beers.beer AS beer,
			beers.state_brewed AS state_brewed,
			beers.feels AS feels
		FROM favorite_beers
		INNER JOIN beers
		ON favorite_beers.beer_id = beers.id
    WHERE favorite_beers.user_id = $1`,
		[userId]
	);
};

module.exports = Beer;
