const path = require('path');
const getDataFromFile = require('../helpers/files');

const userDataPath = path.join(__dirname, '..', 'data', 'users.json');
const cardDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getUsers = (req, res) => getDataFromFile(userDataPath)
  .then((users) => res.status(200).send(users))
  .catch((err) => res.status(500).send(err));

const getProfile = (req, res) => getDataFromFile(userDataPath)
  .then((users) => users.find((user) => user._id === req.params._id))
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    res.status(200).send(user);
  })
  .catch((err) => res.status(500).send(err));

const getCards = (req, res) => getDataFromFile(cardDataPath)
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(500).send(err));

const getError = (req, res) => res.status(404).send({ 'message': 'Запрашиваемый ресурс не найден' });

module.exports = {
  getUsers, getProfile, getCards, getError,
};
