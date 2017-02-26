const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);

router.post('/', controller.create);
router.post('/favs', controller.favs)

module.exports = router;
