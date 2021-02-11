const path = require('path');
const getDataFromFile = require('../helpers/files');

const cardDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => getDataFromFile(cardDataPath)
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(500).send(err));

const getError = (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });

module.exports = { getCards, getError };
