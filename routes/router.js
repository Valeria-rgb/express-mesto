const router = require('express').Router();
const { getUsers, getProfile } = require('../controllers/users');
const { getCards, getError } = require('../controllers/cards');

router.get('/users', getUsers);

router.get('/users/:_id', getProfile);

router.get('/cards', getCards);

router.all('/*', getError);

module.exports = router;
