const CardModel = require('../models/card');

const getCards = (req, res) => {
  CardModel.find({})
    .populate('owner')
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send(err));
};
const postCard = (req, res) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  CardModel.create({ name, link, owner: _id })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => res.status(500).send(err));
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  CardModel.findByIdAndRemove(cardId, req.body)
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => res.status(500).send(err));
};

const putLike = (req, res) => {
  const { cardId } = req.params;
  const { _id } = req.user;
  CardModel.findByIdAndUpdate(cardId, {
    $addToSet: {
      likes: _id,
    },
  }, {
    new: true,
  })
    .populate(['likes', 'owner'])
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => res.status(500).send(err));
};

const deleteLike = (req, res) => {
  const { cardId } = req.params;
  const { _id } = req.user;
  CardModel.findByIdAndUpdate(cardId, {
    $pull: {
      likes: _id,
    },
  }, {
    new: true,
  })
    .populate(['likes', 'owner'])
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => res.status(500).send(err));
};

const getError = (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });

module.exports = {
  getCards, postCard, deleteCard, putLike, deleteLike, getError,
};
