const UserModel = require('../models/user');

const getUsers = (req, res) => {
  UserModel.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
};

const getProfile = (req, res) => {
  const { userId } = req.params;
  UserModel.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

const createProfile = (req, res) => {
  const { name, about, avatar } = req.body;
  UserModel.create({ name, about, avatar })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

const updateProfile = (req, res) => {
  const { _id } = req.user;
  const { name, about } = req.body;
  UserModel.findByIdAndUpdate({ _id }, { name, about })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

const updateAvatar = (req, res) => {
  const { _id } = req.user;
  const { avatar } = req.body;
  UserModel.findByIdAndUpdate({ _id }, { avatar })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  getUsers, getProfile, updateProfile, updateAvatar, createProfile,
};
