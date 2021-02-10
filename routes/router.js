const router = require('express').Router();
const {
  getUsers, getProfile, getCards, getError,
} = require('../controllers/controllers');

router.get('/users', getUsers);

router.get('/users/:_id', getProfile);

router.get('/cards', getCards);

router.all('/*', getError);

module.exports = router;
