const router = require('express').Router();
const { getUsers, getProfile, createProfile, updateProfile, updateAvatar } = require('../controllers/users');
const { getCards, postCard, deleteCard, putLike, deleteLike, getError } = require('../controllers/cards');

router.get('/users', getUsers);
router.get('/users/:userId', getProfile);
router.post('/users', createProfile);
router.patch('/users/me', updateProfile);
router.patch('/users/me/avatar', updateAvatar);

router.get('/cards', getCards);
router.post('/cards', postCard);
router.delete('/cards/:cardId', deleteCard);
router.put('/cards/:cardId/likes', putLike);
router.delete('/cards/:cardId/likes', deleteLike);
router.all('/*', getError);

module.exports = router;
